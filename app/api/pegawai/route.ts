import { NextResponse } from 'next/server';
import { z } from 'zod'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { request } from 'http';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || '';
  const currentPage = searchParams.get('currentPage') || '1';

  try {
    const pegawais = await prisma.pegawai.findMany({
      where: {
        OR: [
          { nama: { contains: query, mode: 'insensitive' } },
          { alamat: { contains: query, mode: 'insensitive' } },
        ],
      },
    });

    return NextResponse.json(pegawais)
  } catch (error) {
    console.error(' Failed to fetch pegawai', error);
    console.log(error)
    return new Response('Internal Server Error', { status: 500 });
  }
}


const PegawaiSchema = z.object({ 
  nama: z.string().min(3),
  alamat: z.string().min(3),
  umur: z.number().int(),
  no_hp: z.string().min(6), 
  gaji: z.string().min(3)
})


export async function POST(request: Request){ 
  const requestData = await request.json();
  const validatedFields = PegawaiSchema.safeParse(requestData);

  if (!validatedFields.success) {
    return NextResponse.json(
      { Error: validatedFields.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  try {
    await prisma.pegawai.create({ 
      data: { 
        nama: validatedFields.data.nama, 
        alamat: validatedFields.data.alamat, 
        umur: validatedFields.data.umur, 
        no_hp: validatedFields.data.no_hp, 
        gaji: validatedFields.data.gaji
      }
    })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create Customer' }, { status: 500 })
  }

  revalidatePath('/admin/pegawai')
  return NextResponse.redirect('/admin/pegawai')
}


export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID pegawai tidak ditemukan' }, { status: 400 });
  }

  try {
    const deletedPegawai = await prisma.pegawai.delete({
      where: {
        id: id,
      },
    });

    if (!deletedPegawai) {
      return NextResponse.json({ error: 'Pegawai tidak ditemukan' }, { status: 404 });
    }

    revalidatePath('/admin/pegawai');
    return NextResponse.json({ message: 'Pegawai berhasil dihapus' });
  } catch (error) {
    console.error('Error deleting pegawai:', error);
    return NextResponse.json({ error: 'Gagal menghapus pegawai' }, { status: 500 });
  }
}


// export async function PUT(request: Request) {
//   const { id, nama, alamat, umur, no_hp, gaji } = await request.json();

//   try {
//     const updatedPegawai = await prisma.pegawai.update({
//       where: {
//         id,
//       },
//       data: {
//         nama,
//         alamat,
//         umur,
//         no_hp,
//         gaji,
//       },
//     });

//     if (!updatedPegawai) {
//       return NextResponse.json({ error: 'Pegawai tidak ditemukan' }, { status: 404 });
//     }

//     revalidatePath('/admin/pegawai');
//     return NextResponse.json({ message: 'Pegawai berhasil diupdate' });
//   } catch (error) {
//     console.error('Error updating pegawai:', error);
//     return NextResponse.json({ error: 'Gagal mengupdate pegawai' }, { status: 500 });
//   }
// }