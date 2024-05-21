import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const pegawai = await prisma.pegawai.findUnique({
      where: { id },
    });

    if (!pegawai) {
      return NextResponse.json({ error: 'Pegawai tidak ditemukan' }, { status: 404 });
    }

    return NextResponse.json(pegawai);
  } catch (error) {
    console.error('Error fetching pegawai:', error);
    return NextResponse.json({ error: 'Gagal mengambil data pegawai' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { nama, alamat, umur, no_hp, gaji } = await request.json();

  try {
    const updatedPegawai = await prisma.pegawai.update({
      where: {
        id,
      },
      data: {
        nama,
        alamat,
        umur: Number(umur),
        no_hp,
        gaji: String(gaji),
      },
    });

    if (!updatedPegawai) {
      return NextResponse.json({ error: 'Pegawai tidak ditemukan' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Pegawai berhasil diupdate' });
  } catch (error) {
    console.error('Error updating pegawai:', error);
    return NextResponse.json({ error: 'Gagal mengupdate pegawai' }, { status: 500 });
  }
}
