/*
  Warnings:

  - Added the required column `jenisKendaraan` to the `Kendaraan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kendaraan" ADD COLUMN     "jenisKendaraan" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Jenis" (
    "id" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Jenis_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Kendaraan" ADD CONSTRAINT "Kendaraan_jenisKendaraan_fkey" FOREIGN KEY ("jenisKendaraan") REFERENCES "Jenis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
