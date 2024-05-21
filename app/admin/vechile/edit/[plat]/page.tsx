import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';
import { put } from '@vercel/blob';

const KendaraanSchema = z.object({
    plat: z.string().min(3),
    merk: z.string().min(3),
    warna: z.string().min(1),
    tahun: z.string().min(1),
    bahan_bakar: z.string().min(1),
    cc: z.number().int(),
    harga_sewa: z.number(),
    status: z.boolean(),
    jenisKendaraan: z.string(),
});

export const PUT = async (req: NextRequest) => {
    if (req.method !== 'PUT') {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    }

    const formData = await req.formData();
    const plat = formData.get('plat');
    if (typeof plat !== 'string') {
        return NextResponse.json({ error: 'Plat is required and must be a string' }, { status: 400 });
    }

    const validatedFields = KendaraanSchema.safeParse({
        plat: formData.get('plat'),
        merk: formData.get('merk'),
        warna: formData.get('warna'),
        tahun: formData.get('tahun'),
        bahan_bakar: formData.get('bahan_bakar'),
        cc: Number(formData.get('cc')),
        harga_sewa: Number(formData.get('harga_sewa')),
        status: formData.get('status') === 'aktif',
        jenisKendaraan: formData.get('jenisKendaraan'),
    });

    if (!validatedFields.success) {
        return NextResponse.json({ errors: validatedFields.error.flatten().fieldErrors }, { status: 400 });
    }

    try {
        const updatedKendaraan = await prisma.kendaraan.update({
            where: { plat },
            data: validatedFields.data,
        });

        const images = formData.getAll('images') as File[];
        if (images.length > 0) {
            const validatedImages = images.filter((file) => {
                return file.size > 0 && file.type.startsWith('image/') && file.size < 4000000;
            });

            const uploadedImages = await Promise.all(
                validatedImages.map(async (file) => {
                    const { url } = await put(file.name, file, { access: 'public', multipart: true });
                    return url;
                })
            );

            await       // Hapus gambar lama dari database (jika diperlukan)
                await prisma.foto.deleteMany({
                    where: { kendaraan_plat: updatedKendaraan.plat },
                });

            await Promise.all(
                uploadedImages.map(async (imageUrl) => {
                    await prisma.foto.create({
                        data: {
                            title: '',
                            image: imageUrl,
                            kendaraan_plat: updatedKendaraan.plat,
                        },
                    });
                })
            );
        }

        revalidatePath('/kendaraan');
        return NextResponse.redirect('http://localhost:3000/kendaraan');
    } catch (error: any) {
        return NextResponse.json({ error: 'Failed to update kendaraan', errorMessage: error.message }, { status: 500 });
    }
};

