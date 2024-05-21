import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";
import { z } from 'zod'
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from "next";
import { request } from 'http';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { plat } = req.query;

  if (!plat) {
    return res.status(400).json({ error: 'Plat kendaraan is required' });
  }

  try {
    const kendaraan = await prisma.kendaraan.findUnique({
      where: {
        plat: plat as string,
      },
      select: {
        plat: true,
        merk: true,
        warna: true,
        tahun: true,
        bahan_bakar: true,
        cc: true,
        harga_sewa: true,
        status: true,
        createdAt: true,
        jenis: {
          select: {
            jenis: true,
          },
        },
        foto: {
          select: {
            image: true,
          },
        },
      },
    });

    if (!kendaraan) {
      return res.status(404).json({ error: 'Kendaraan tidak ditemukan' });
    }

    res.status(200).json(kendaraan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch kendaraan data' });
  }
}


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

      // Hapus gambar lama dari database (jika diperlukan)
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
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update kendaraan', errorMessage: error.message }, { status: 500 });
  }

  revalidatePath('/kendaraan');
  return NextResponse.redirect('http://localhost:3000/kendaraan');
};








export const DELETE = async (request: Request, { params }: { params: { plat: string } }) => {
  try {
    const plat = params.plat; // Menggunakan nilai plat sebagai string

    // Delete vehicle
    await prisma.kendaraan.delete({
      where: { plat },
    });

    return new Response(JSON.stringify({ success: true, message: 'Data terhapus' }), { status: 200 });
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    console.log(error)
    return new Response(JSON.stringify({ message: 'Failed to delete vehicle' }), { status: 500 });
  }
};

interface Params {
  plat: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const plat = params.plat;

  const post = await prisma.kendaraan.findUnique({
    where: {
      plat,
    },
  });

  if (!post) {
    return NextResponse.json(
      {
        success: true,
        message: 'Detail Data Kendaraan Not Found!',
        data: null,
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: 'Detail Data Kendaraan',
      data: post,
    },
    { status: 200 }
  );
}