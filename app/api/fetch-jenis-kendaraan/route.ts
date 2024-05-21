import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET() {
  try {
    const vechileTypes = await prisma.jenis.findMany({
      select: {
        id: true,
        jenis: true
      }
    })
    return NextResponse.json(vechileTypes)
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch Jenis Kendaraan' }, { status: 500 })
  }
}
