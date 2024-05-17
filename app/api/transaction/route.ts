import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
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
        url_foto: true,
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
    return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 });
  }
}