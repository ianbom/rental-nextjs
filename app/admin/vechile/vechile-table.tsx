"use client";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { formatCurrency, formatDate } from "@/lib/utils";
import { ButtonDeleteKendaraan, EditButton } from "@/components/buttons";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import Image from "next/image";
import Link from 'next/link';
import { EditKendaraanButton } from "./create/button";



export const DeleteButton = ({ plat }: { plat: string }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setDeleteError(null);

    try {
      const response = await fetch(`/api/vechile/${plat}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Display success message
        // Optionally, you can add additional logic here, such as updating the UI or refreshing data
      } else {
        const errorData = await response.json();
        setDeleteError(errorData.message || "Terjadi kesalahan saat menghapus kendaraan.");
        console.log(errorData)
      }
    } catch (error) {
      console.error("Error deleting vehicle:", error);
      console.log(error)
      setDeleteError("Terjadi kesalahan saat menghapus kendaraan.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      className="rounded-sm text-sm border p-1 hover:bg-gray-100"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      <IoTrashOutline size={20} />
      {isDeleting && <span className="ml-2">Menghapus...</span>}
      {deleteError && <span className="ml-2 text-red-500">{deleteError}</span>}
    </button>
  );
};

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

const VechileTable = ({ query, currentPage }: { query: string; currentPage: number; }) => {
  const [kendaraan, setKendaraan] = useState<Kendaraan[]>([]);

  useEffect(() => {
    const fetchKendaraan = async () => {
      try {
        const response = await fetch(`/api/vechile/?query=${query}&currentPage=${currentPage}`);
        const data = await response.json();
        setKendaraan(data);
      } catch (error) {
        console.error('Error fetching kendaraan:', error);
      }
    };

    fetchKendaraan();
  }, [query, currentPage]);
  console.log(kendaraan);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="max-w-[150px]">Plat</TableHead>
          <TableHead className="max-w-[150px]">Merk</TableHead>
          <TableHead className="hidden md:table-cell">Warna</TableHead>
          <TableHead className="hidden md:table-cell">Tahun</TableHead>
          <TableHead className="hidden md:table-cell">Jenis</TableHead>
          <TableHead className="hidden md:table-cell">CC</TableHead>
          <TableHead className="hidden md:table-cell">Harga Sewa</TableHead>
          <TableHead className="hidden md:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Bahan Bakar</TableHead>
          <TableHead className="hidden md:table-cell">Image</TableHead>
          <TableHead className="hidden md:table-cell">Created_At</TableHead>
          <TableHead className="hidden md:table-cell">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {kendaraan.map((kendaraan, index) => (
          <TableRow key={kendaraan.plat}>
            <TableCell className="font-medium">
              <Link href={`/admin/vechile/show/${kendaraan.plat}`}>{kendaraan.plat}</Link>
            </TableCell>
            <TableCell className="hidden md:table-cell">{kendaraan.merk}</TableCell>
            <TableCell className="hidden md:table-cell">{kendaraan.warna}</TableCell>
            <TableCell className="hidden md:table-cell">{kendaraan.tahun}</TableCell>
            <TableCell className="hidden md:table-cell">{kendaraan.jenis.jenis}</TableCell>
            <TableCell className="hidden md:table-cell">{kendaraan.cc} CC</TableCell>
            <TableCell className="hidden md:table-cell">{formatCurrency(kendaraan.harga_sewa)}</TableCell>
            <TableCell className="hidden md:table-cell">{kendaraan.status ? 'Tersedia' : 'Tidak Tersedia'}</TableCell>
            <TableCell className="hidden md:table-cell">{kendaraan.bahan_bakar}</TableCell>
            <TableCell className="hidden md:table-cell">{kendaraan.foto.map((foto, index) => (
              <Image
                key={`${kendaraan.plat}-${index}`}
                src={foto.image}
                alt={`${kendaraan.plat}-${index}`}
                width={100}
                height={100}
              />
            ))}</TableCell>
            <TableCell className="hidden md:table-cell">{formatDate(kendaraan.createdAt.toString())}</TableCell>
            <TableCell>
              <div className="flex justify-center">
                <EditKendaraanButton plat={kendaraan.plat} />
                <DeleteButton plat={kendaraan.plat} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default VechileTable;