// lib/seeder.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedJenis() {
  try {
    // Seed data for motor
    await prisma.jenis.create({
      data: {
        jenis: 'Motor',
      },
    });

    // Seed data for mobil
    await prisma.jenis.create({
      data: {
        jenis: 'Mobil',
      },
    });

    // Seed data for pesawat
    await prisma.jenis.create({
      data: {
        jenis: 'Pesawat',
      },
    });

    // Seed data for kapal
    await prisma.jenis.create({
      data: {
        jenis: 'Kapal',
      },
    });

    console.log('Jenis seeder executed successfully');
  } catch (error) {
    console.error('Error seeding Jenis:', error);
  } finally {
    await prisma.$disconnect();
  }
}
