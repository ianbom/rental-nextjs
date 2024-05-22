import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';



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


const CustomerSchema = z.object({
  name: z.string().min(3),
  alamat: z.string().min(3),
  hp: z.string().min(3),
  nik: z.string().min(6)
})

export async function POST(request: Request) {
  const requestData = await request.json();
  const validatedFields = CustomerSchema.safeParse(requestData);

  if (!validatedFields.success) {
    return NextResponse.json(
      { Error: validatedFields.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  try {
    await prisma.customer.create({
      data: {
        name: validatedFields.data.name,
        alamat: validatedFields.data.alamat,
        hp: validatedFields.data.hp,
        nik: validatedFields.data.nik
      }
    })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create Customer' }, { status: 500 })
  }

  revalidatePath('/product')
  return NextResponse.redirect('/product')
}