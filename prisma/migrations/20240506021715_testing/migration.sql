/*
  Warnings:

  - You are about to drop the column `kendaraan_plat` on the `Foto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Foto" DROP CONSTRAINT "Foto_kendaraan_plat_fkey";

-- AlterTable
ALTER TABLE "Foto" DROP COLUMN "kendaraan_plat";
