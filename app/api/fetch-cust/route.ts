import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      select: {
        id: true,
        name: true
      }
    })
    return NextResponse.json(customers)
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch customers' }, { status: 500 })
  }
}