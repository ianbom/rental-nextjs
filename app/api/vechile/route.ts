import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";
import { z } from 'zod'
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || '';
  const currentPage = searchParams.get('currentPage') || '1';

  try {
    const kendaraan = await prisma.kendaraan.findMany({
      where: {
        OR: [
          { plat: { contains: query, mode: "insensitive" } },
          { merk: { contains: query, mode: "insensitive" } }
        ]
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
        jenis: { select: { jenis: true } },
        foto: { select: { image: true } },
      }
    });

    return NextResponse.json(kendaraan);
  } catch (error) {
    console.error('Failed to fetch kendaraan:', error);
    return NextResponse.json({ error: 'Failed to fetch kendaraan' }, { status: 500 });
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



export const POST = async (req: NextRequest) => {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  const formData = await req.formData();
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
    const newKendaraan = await prisma.kendaraan.create({
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

      await Promise.all(
        uploadedImages.map(async (imageUrl) => {
          await prisma.foto.create({
            data: {
              title: '',
              image: imageUrl,
              kendaraan_plat: newKendaraan.plat,
            },
          });
        })
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed create kendaraan', errorMessage: error.message }, { status: 500 });
  }

  revalidatePath('/admin/vechile');
  return NextResponse.redirect('admin/vechile');
};



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

  revalidatePath('/admin/vechile');
  return NextResponse.redirect('/admin/vechile');
};








// interface Params {
//   plat: string;
// }

// export const DELETE =  async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<{ message: string }>,
//   { params }: { params: Params }
// ) {
//   if (req.method === 'DELETE') {
//     try {
//       const plat = params.plat;
//       console.log(params)
//       // Validasi input
//       if (!plat) {
//         return res.status(400).json({ message: 'Vehicle plat is required' });
//       }

//       // Hapus kendaraan dari database
//       await prisma.kendaraan.delete({
//         where: { plat },
//       });

//       return res.status(200).json({ message: 'Vehicle deleted successfully' });
//     } catch (error) {
//       console.error('Error deleting vehicle:', error);
//       return res.status(500).json({ message: 'Failed to delete vehicle' });
//     }
//   } else {
//     // Method not allowed
//     res.setHeader('Allow', ['DELETE']);
//     return res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }