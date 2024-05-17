import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

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