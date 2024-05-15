"use client";
import { formatCurrency, formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import Image from "next/image";
import { getTransaksi } from "@/lib/data";

const TransactionTable = async ({ query, currentPage }: { query: string; currentPage: number; }) => {

    const transaction = await getTransaksi(query, currentPage)
    console.log(transaction);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="max-w-[150px]">No</TableHead>
                    <TableHead className="max-w-[150px]">Plat Kendaraan</TableHead>
                    <TableHead className="hidden md:table-cell">Nama Customer</TableHead>
                    <TableHead className="hidden md:table-cell">Tanggal Mulai Sewa</TableHead>
                    <TableHead className="hidden md:table-cell">Tanggal Selesai Sewa</TableHead>
                    <TableHead className="hidden md:table-cell">Total Harga</TableHead>
                    <TableHead className="hidden md:table-cell">Deskripsi</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Created_At</TableHead>
                    <TableHead className="hidden md:table-cell">Bukti Transfer</TableHead>
                    <TableHead className="hidden md:table-cell">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transaction.map((transaction, index) => (
                    <TableRow key={transaction.transaksiId}>

                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell className="hidden md:table-cell">{transaction.kendaraan.plat}</TableCell>
                        <TableCell className="hidden md:table-cell">{transaction.customer.name}</TableCell>
                        <TableCell className="hidden md:table-cell">{formatDate(transaction.tgl_mulai_sewa.toString())}</TableCell>
                        <TableCell className="hidden md:table-cell">{formatDate(transaction.tgl_selesai_sewa.toString())}</TableCell>
                        <TableCell className="hidden md:table-cell">{transaction.total_harga}</TableCell>
                        <TableCell className="hidden md:table-cell">{transaction.total_harga}</TableCell>
                        <TableCell className="hidden md:table-cell">{transaction.deskripsi}</TableCell>
                        <TableCell className="hidden md:table-cell">{formatDate(transaction.createdAt.toString())}</TableCell>
                        <TableCell className="hidden md:table-cell">
                            <Image
                                src={transaction.url_foto}
                                alt={transaction.transaksiId}
                                height={200}
                                width={100}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="rounded-t-md object-cover"
                            />
                        </TableCell>
                        <TableCell>
                            <div className="flex justify-center">
                                <EditButton id="" />
                                <DeleteButton id="" />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TransactionTable;