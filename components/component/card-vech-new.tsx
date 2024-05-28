"use client";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from 'react';
import { formatCurrency, formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import Image from "next/image";
import { log } from "console";
import Search from "../search";
import Link from "next/link";


interface Kendaraan {
  plat: string;
  merk: string;
  harga_sewa: number;
  tahun: number;
  status: boolean;
  foto: { image: string }[];
}

export function CardVechNew({ query, currentPage }: { query: string; currentPage: number; }) {
  const [kendaraan, setKendaraan] = useState<Kendaraan[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchKendaraan = async () => {
      try {
        const response = await fetch(`/api/vechile?query=${query}&currentPage=${currentPage}`);
        const data = await response.json();
        setKendaraan(data);
      } catch (error) {
        console.error('Error fetching kendaraan:', error);
      }
    };
    fetchKendaraan();
  }, [query, currentPage]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredKendaraan = kendaraan.filter((item) =>
    item.merk.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.plat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
  <div className=" md:py-4 pl-24 pr-24">
    <Search />
  </div>
  <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 sm:p-8 md:p-10">
    {filteredKendaraan.map((item, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950">
        <img
          alt={`Vehicle ${index + 1}`}
          className="w-full h-48 object-cover"
          height="200"
          src={item.foto[0]?.image || "/placeholder.svg"}
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          width="300"
        />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <Link href={`/product/motor/show/${item.plat}`}>
              <h3 className="text-lg font-semibold">{item.merk}</h3>
            </Link>
            <span
              className={`px-2 py-1 rounded-md ${
                item.status 
              }`}
            >
              {item.status ? "Tersedia" : "Tidak Tersedia"}
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400">{item.plat}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="text-primary font-semibold">{formatCurrency(item.harga_sewa)}/day</div>
            <div className="text-gray-500 dark:text-gray-400">Tahun {item.tahun}</div>
          </div>
        </div>
      </div>
    ))}
  </main>
</>
  )
}