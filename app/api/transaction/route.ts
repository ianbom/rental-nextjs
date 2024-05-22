import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { any, z } from 'zod'
import { NextRequest, NextResponse } from 'next/server';
import { request } from 'http';
import { put } from "@vercel/blob";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || '';
  const currentPage = searchParams.get('currentPage') || '1';

  try {
    const transaksi = await prisma.transaksi.findMany({
      where: {
        OR: [
          { customer_id: { contains: query, mode: "insensitive" } },
          { kendaraan_plat: { contains: query, mode: "insensitive" } },
        ],
      },
      select: {
        transaksiId: true,
        kendaraan: {
          select: {
            plat: true,
            harga_sewa: true,
          },
        },
        customer: {
          select: {
            name: true
          }
        },
        tgl_mulai_sewa: true,
        tgl_selesai_sewa: true,
        deskripsi: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Menghitung total harga untuk setiap transaksi
    const transaksiFull = transaksi.map((transaksi) => {
      const durasi = Math.ceil(
        (new Date(transaksi.tgl_selesai_sewa).getTime() - new Date(transaksi.tgl_mulai_sewa).getTime()) / (1000 * 60 * 60 * 24)
      );
      const totalHarga = durasi * Number(transaksi.kendaraan.harga_sewa);
      return { ...transaksi, total_harga: totalHarga };
    });

    return NextResponse.json(transaksiFull);
  } catch (error) {
    console.error('Failed to fetch transactions:', error);
    return NextResponse.json([], { status: 500 });
  }
}



const TransaksiSchema = z.object({
  tgl_mulai_sewa: z.preprocess((arg) => {
    if (typeof arg == 'string') return new Date(arg);
  }, z.date()),
  tgl_selesai_sewa: z.preprocess((arg) => {
    if (typeof arg == 'string') return new Date(arg);
  }, z.date()),
  deskripsi: z.string().min(1),
  kendaraan_plat: z.string().min(1),
  customer_id: z.string().min(1),
  url_foto: z.instanceof(File)
    .refine((file) => file.size > 0, { message: 'Image is required' })
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), {
      message: "Only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image size must be less than 4MB",
    }),
});


export const POST = async (req: NextRequest) => {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  const formData = await req.formData();
  const validatedFields = TransaksiSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return NextResponse.json({ errors: validatedFields.error.flatten().fieldErrors }, { status: 400 });
  }

  const {url_foto} = validatedFields.data;
    const { url } = await put(url_foto.name, url_foto, { access: "public", multipart: true });

  try {
    await prisma.transaksi.create({ 
      data: { 
        kendaraan_plat: validatedFields.data.kendaraan_plat,
     customer_id: validatedFields.data.customer_id,
     tgl_mulai_sewa: validatedFields.data.tgl_mulai_sewa,
     tgl_selesai_sewa: validatedFields.data.tgl_selesai_sewa,
     deskripsi: validatedFields.data.deskripsi,
     url_foto: url
    
      }
    })

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Failed to create Transaksi' }, { status: 500 });
  }

  revalidatePath('/product/order');
  return NextResponse.redirect('/product/order');
};



