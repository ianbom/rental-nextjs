"use client";
import React, { useState } from 'react';
import { getKendaraanByPlat } from '@/lib/kendaraan/data';
import { formatCurrency } from '@/lib/utils';

// Define ShowVechile component
const ShowVechile = ({ kendaraan }: { kendaraan: any }) => {
  // Render the component with the received data
  return (
    <div>
      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Detail Kendaraan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carousel component */}
          <div>
            <Carousel>
              {kendaraan.foto.map((foto: any, index: any) => (
                <CarouselItem key={`${kendaraan.plat}-${index}`}>
                  <img
                    alt={`Kendaraan ${index + 1}`}
                    className="w-full h-auto rounded-lg object-cover"
                    height={400}
                    src={foto.image}
                    style={{
                      aspectRatio: "600/400",
                      objectFit: "cover",
                    }}
                    width={600}
                  />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
          {/* Details of the vehicle */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {/* Display vehicle details */}
              {/* Plat Nomor */}
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Plat Nomor</p>
                <p className="font-medium">{kendaraan.plat}</p>
              </div>
              {/* Merk */}
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Merk</p>
                <p className="font-medium">{kendaraan.merk}</p>
              </div>
              {/* Warna */}
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Warna</p>
                <p className="font-medium">{kendaraan.warna}</p>
              </div>
              {/* Tahun */}
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Tahun</p>
                <p className="font-medium">{kendaraan.tahun}</p>
              </div>
              {/* Bahan Bakar */}
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Bahan Bakar</p>
                <p className="font-medium">{kendaraan.bahan_bakar}</p>
              </div>
              {/* Kapasitas Mesin */}
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Kapasitas Mesin</p>
                <p className="font-medium">{kendaraan.cc}</p>
              </div>
              {/* Harga Sewa */}
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Harga</p>
                <p className="font-medium">{formatCurrency(kendaraan.harga_sewa)}</p>
              </div>
              {/* Status */}
              <div>
    <p className="text-gray-500 dark:text-gray-400 mb-1">Status</p>
    <p className="font-medium">{kendaraan.status ? 'Tersedia' : 'Tidak Tersedia'}</p>
</div>

              {/* Jenis Kendaraan */}
              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Jenis Kendaraan</p>
                <p className="font-medium">{kendaraan.jenis.jenis}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Define Carousel component
const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Functions to navigate through the carousel
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? React.Children.count(children) - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === React.Children.count(children) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Render the carousel with navigation buttons
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="whitespace-nowrap transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className=" absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        Prev
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        Next
      </button>
    </div>
  );
};

// Define CarouselItem component
const CarouselItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-block w-full h-full">
      {children}
    </div>
  );
};

export default ShowVechile;

