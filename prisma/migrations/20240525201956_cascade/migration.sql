-- DropForeignKey
ALTER TABLE "Transaksi" DROP CONSTRAINT "Transaksi_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "Transaksi" DROP CONSTRAINT "Transaksi_kendaraan_plat_fkey";

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_kendaraan_plat_fkey" FOREIGN KEY ("kendaraan_plat") REFERENCES "Kendaraan"("plat") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
