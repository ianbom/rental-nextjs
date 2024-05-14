/*
  Warnings:

  - You are about to drop the column `kendaraan_id` on the `Image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_kendaraan_id_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "kendaraan_id";
