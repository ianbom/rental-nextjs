-- CreateTable
CREATE TABLE "Pegawai" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "umur" INTEGER NOT NULL,
    "alamat" TEXT NOT NULL,
    "no_hp" TEXT NOT NULL,
    "gaji" TEXT NOT NULL,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id")
);
