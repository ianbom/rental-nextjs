import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Pegawai } from '../../../prisma/standalone/index';

export async function GET(req: Request){ 
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query') || '';
  const currentPage = searchParams.get('currentPage') || '1';

  try {
    const pegawai = await prisma.pegawai.findMany
  } catch (error) {
    
  }
}