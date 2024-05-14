/*
  Warnings:

  - You are about to drop the column `kendaraan_id` on the `Transaksi` table. All the data in the column will be lost.
  - Added the required column `kendaraan_plat` to the `Transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaksi" DROP CONSTRAINT "Transaksi_kendaraan_id_fkey";

-- AlterTable
ALTER TABLE "Foto" ADD COLUMN     "kendaraan_plat" TEXT NOT NULL DEFAULT 'null';

-- AlterTable
ALTER TABLE "Transaksi" DROP COLUMN "kendaraan_id",
ADD COLUMN     "kendaraan_plat" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_kendaraan_plat_fkey" FOREIGN KEY ("kendaraan_plat") REFERENCES "Kendaraan"("plat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_kendaraan_plat_fkey" FOREIGN KEY ("kendaraan_plat") REFERENCES "Kendaraan"("plat") ON DELETE RESTRICT ON UPDATE CASCADE;
