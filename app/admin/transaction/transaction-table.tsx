"use client";
import { useState, useEffect } from 'react';
import { formatCurrency, formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import Image from "next/image";

interface Transaksi {
    transaksiId: string;
    kendaraan: {
        plat: string;
        harga_sewa: number;
    };
    customer: {
        name: string;
    };
    tgl_mulai_sewa: Date;
    tgl_selesai_sewa: Date;
    deskripsi: string;
    
    createdAt: Date;
    updatedAt: Date;
    total_harga: number;
}

const TransactionTable = ({ query, currentPage }: { query: string; currentPage: number; }) => {
    const [transactions, setTransactions] = useState<Transaksi[]>([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch(`/api/transaction?query=${query}&currentPage=${currentPage}`);
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, [query, currentPage]);
    console.log(transactions);

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
                    
                    <TableHead className="hidden md:table-cell">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactions.map((transaction, index) => (
                    <TableRow key={transaction.transaksiId}>

                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell className="hidden md:table-cell">{transaction.kendaraan.plat}</TableCell>
                        <TableCell className="hidden md:table-cell">{transaction.customer.name}</TableCell>
                        <TableCell className="hidden md:table-cell">{formatDate(transaction.tgl_mulai_sewa.toString())}</TableCell>
                        <TableCell className="hidden md:table-cell">{formatDate(transaction.tgl_selesai_sewa.toString())}</TableCell>
                        <TableCell className="hidden md:table-cell">{formatCurrency(transaction.total_harga)},00</TableCell>
                        <TableCell className="hidden md:table-cell">{formatCurrency(transaction.total_harga)},00</TableCell>
                        <TableCell className="hidden md:table-cell">{transaction.deskripsi}</TableCell>
                        <TableCell className="hidden md:table-cell">{formatDate(transaction.createdAt.toString())}</TableCell>

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