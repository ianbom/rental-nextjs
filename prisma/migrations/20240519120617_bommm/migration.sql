/*
  Warnings:

  - You are about to drop the column `status` on the `Transaksi` table. All the data in the column will be lost.
  - Added the required column `deskripsi` to the `Transaksi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_foto` to the `Transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "nik" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Foto" ADD COLUMN     "kendaraan_plat" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Transaksi" DROP COLUMN "status",
ADD COLUMN     "deskripsi" TEXT NOT NULL,
ADD COLUMN     "url_foto" TEXT NOT NULL,
ALTER COLUMN "total_harga" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_kendaraan_plat_fkey" FOREIGN KEY ("kendaraan_plat") REFERENCES "Kendaraan"("plat") ON DELETE RESTRICT ON UPDATE CASCADE;
