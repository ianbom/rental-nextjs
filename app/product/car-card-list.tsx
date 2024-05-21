"use client";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from 'react';
import { formatCurrency, formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import Image from "next/image";
import { log } from "console";
import Search from "../admin/search";
import TransaksiForm from "../transaksi-components/transaksi-create";

interface Kendaraan {
  plat: string;
  merk: string;
  warna: string;
  tahun: number;
  jenis: { jenis: string };
  cc: number;
  harga_sewa: number;
  status: boolean;
  bahan_bakar: string;
  foto: { image: string }[];
  createdAt: Date;
}

const CarCardList = ({ query, currentPage }: { query: string; currentPage: number; }) => {
  const [kendaraan, setKendaraan] = useState<Kendaraan[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    const fetchKendaraan = async () => {
      try {
        const response = await fetch(`/api/vechile?query=${query}&currentPage=${currentPage}`);
        const data = await response.json();
        console.log('data', data);
        setKendaraan(data);
      } catch (error) {
        console.error('Error fetching kendaraan:', error);
      }
    };
    fetchKendaraan();
  }, [query, currentPage]);

  const handleImageClick = (images: string[]) => {
    setSelectedImages(images);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImages([]);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1));
  };

  // const handlePesanClick = () => {
  //   setShowFormModal(true);
  // };

  // const handleCloseFormModal = () => {
  //   setShowFormModal(false);
  // };

  return (
    <>
      {/* ... */}

      <div className=" md:py-4 pl-24 pr-24">
        <Search />
      </div>
      <section className="w-full grid grid-cols-1 gap-6 md:grid-cols-3 py-12 md:py-4 pl-24 pr-24">

        {kendaraan.map((kendaraan, index) => (
          <div key={index} className="relative flex flex-col items-start gap-6 rounded-lg border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-wrap gap-2">
              <Image
                key={`${kendaraan.plat}-0`}
                src={kendaraan.foto[0]?.image || "/placeholder.svg"}
                alt={`${kendaraan.plat}-0`}
                width={100}
                height={100}
                className="h-24 w-24 flex-shrink-0 rounded-md object-cover cursor-pointer"
                onClick={() => handleImageClick(kendaraan.foto.map((foto) => foto.image))}
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col items-end">
              <div className="bg-white p-2 rounded shadow-md dark:bg-gray-800 mb-2">
                <h1 className="text-sm font-semibold">{kendaraan.status ? 'Tersedia' : 'Tidak Tersedia'}</h1>
              </div>
              {kendaraan.status && (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded shadow-md dark:bg-gray-800">
                  Pesan
                </button>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold">{kendaraan.merk}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {kendaraan.plat}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge variant="outline">{formatCurrency(kendaraan.harga_sewa)}</Badge>
                <Badge variant="outline">{kendaraan.cc} CC</Badge>
                <Badge variant="outline">Tahun {kendaraan.tahun}</Badge>
                <Badge variant="outline">{kendaraan.bahan_bakar}</Badge>
                <Badge variant="outline">{kendaraan.jenis.jenis}</Badge>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* ... */}

      {/* Form Modal
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <button
              className="absolute top-2 right-2 text-gray-700 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={handleCloseFormModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <TransaksiForm />
          </div>
        </div>
      )} */}

      {/* Modal */}
      {showModal && selectedImages.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-full max-h-full">
            <div className="relative">
              <Image
                src={selectedImages[currentImageIndex]}
                alt="Enlarged Image"
                width={800}
                height={600}
                className="max-w-full max-h-full"
              />
              <button
                className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
                onClick={handleCloseModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
              <button
                className="text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
                onClick={handlePrevImage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
                onClick={handleNextImage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

      )}

    </>
  );
};

export default CarCardList;