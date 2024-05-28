"use client";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import Link from "next/link";

interface EditButtonProps {
  id: string;
}

export const EditButton: React.FC<EditButtonProps> = ({ id }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/admin/pegawai/${id}`);
  };

  return (
    <Link href={`/admin/pegawai/${id}`} className="rounded-sm text-sm border p-1 hover:bg-gray-100">
      <IoPencil size={20} />
    </Link>


  );
};

interface DeletePegawaiButtonProps {
  id: string;
}

const DeletePegawaiButton = ({ id }: DeletePegawaiButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/pegawai?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Gagal menghapus pegawai');
      }

      console.log('Pegawai berhasil dihapus');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleDelete}
    className="rounded-sm text-sm border p-1 hover:bg-gray-100">
    <IoTrashOutline size={20} />
</button>
  );
};

interface PegawaiTableProps {
  query: string;
  currentPage: number;
}

interface Pegawai {
  id: string;
  nama: string;
  alamat: string;
  umur: number;
  no_hp: string;
  gaji: string;
}

const PegawaiTable: React.FC<PegawaiTableProps> = ({ query, currentPage }) => {
  const [pegawai, setPegawai] = useState<Pegawai[]>([]);

  useEffect(() => {
    const fetchPegawai = async () => {
      try {
        const response = await fetch(`/api/pegawai?query=${query}&currentPage=${currentPage}`);
        const data = await response.json();
        setPegawai(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetch data pegawai", error);
      }
    };
    fetchPegawai();
  }, [query, currentPage]);

  console.log(pegawai);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-[150px]">No</TableHead>
            <TableHead className="max-w-[150px]">Nama</TableHead>
            <TableHead className="hidden md:table-cell">Alamat</TableHead>
            <TableHead className="hidden md:table-cell">No Hp</TableHead>
            <TableHead className="hidden md:table-cell">Umur</TableHead>
            <TableHead className="hidden md:table-cell">Gaji</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pegawai.map((peg, index) => (
            <TableRow key={peg.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">{peg.nama}</TableCell>
              <TableCell className="hidden md:table-cell">{peg.alamat}</TableCell>
              <TableCell className="hidden md:table-cell">{peg.no_hp}</TableCell>
              <TableCell className="hidden md:table-cell">{peg.umur}</TableCell>
              <TableCell className="hidden md:table-cell">{peg.gaji}</TableCell>
              <TableCell>
                <div className="flex justify-center">
                  <EditButton id={peg.id} />
                  <DeletePegawaiButton id={peg.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PegawaiTable;