import { countKendaraan } from '@/lib/kendaraan/data';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server';


export async function GET() {   
   
       try {
        const totalTransaksi = await prisma.transaksi.count(); 
        return NextResponse.json(totalTransaksi)
       } catch (error) {
        console.error(error);
        throw new Error('Failed to count data Kendaraan');
    }
   
}
