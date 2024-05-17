import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || '';
  const currentPage = searchParams.get('currentPage') || '1';

  try {
    const customers = await prisma.customer.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { nik: { contains: query, mode: 'insensitive' } },
        ],
      },
    });

    return NextResponse.json(customers);
  } catch (error) {
    console.error('Failed to fetch customers:', 'message', error);
    return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 });
  }
}