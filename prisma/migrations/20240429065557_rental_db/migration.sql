-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "hp" TEXT NOT NULL,
    "nik" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kendaraan" (
    "plat" TEXT NOT NULL,
    "merk" TEXT NOT NULL,
    "warna" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "bahan_bakar" TEXT NOT NULL,
    "cc" INTEGER NOT NULL,
    "harga_sewa" DECIMAL(65,30) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kendaraan_pkey" PRIMARY KEY ("plat")
);

-- CreateTable
CREATE TABLE "Transaksi" (
    "transaksiId" TEXT NOT NULL,
    "kendaraan_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "tgl_mulai_sewa" TIMESTAMP(3) NOT NULL,
    "tgl_selesai_sewa" TIMESTAMP(3) NOT NULL,
    "total_harga" DECIMAL(65,30) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaksi_pkey" PRIMARY KEY ("transaksiId")
);

-- CreateTable
CREATE TABLE "Image" (
    "image_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "kendaraan_id" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("image_id")
);

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_kendaraan_id_fkey" FOREIGN KEY ("kendaraan_id") REFERENCES "Kendaraan"("plat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_kendaraan_id_fkey" FOREIGN KEY ("kendaraan_id") REFERENCES "Kendaraan"("plat") ON DELETE RESTRICT ON UPDATE CASCADE;
