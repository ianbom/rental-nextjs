/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Image";

-- CreateTable
CREATE TABLE "Foto" (
    "image_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("image_id")
);
