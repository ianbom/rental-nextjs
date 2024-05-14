/*
  Warnings:

  - You are about to drop the column `status` on the `Transaksi` table. All the data in the column will be lost.
  - Added the required column `deskripsi` to the `Transaksi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_foto` to the `Transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Foto" ADD COLUMN     "kendaraan_plat" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Transaksi" DROP COLUMN "status",
ADD COLUMN     "deskripsi" TEXT NOT NULL,
ADD COLUMN     "url_foto" TEXT NOT NULL,
ALTER COLUMN "total_harga" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_kendaraan_plat_fkey" FOREIGN KEY ("kendaraan_plat") REFERENCES "Kendaraan"("plat") ON DELETE RESTRICT ON UPDATE CASCADE;
