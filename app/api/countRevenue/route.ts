import { countKendaraan } from '@/lib/kendaraan/data';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server';


export async function GET() {   
   
       try {
        const totalPegawai = await prisma.pegawai.count(); 
        return NextResponse.json(totalPegawai)
       } catch (error) {
        console.error(error);
        throw new Error('Failed to count data Kendaraan');
    }
   
}
