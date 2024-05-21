import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const kendaraanPlat = await prisma.kendaraan.findMany({
      select: {
        plat: true,
        merk: true
      }
    })
    return NextResponse.json(kendaraanPlat)
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch kendaraan' }, { status: 500 })
  }
}
