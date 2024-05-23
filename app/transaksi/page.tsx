"use client";
import React from 'react'
import TransaksiTable from '../transaksi-components/transaksi-table'
import Search from '@/components/search';
import { CreateTransaksiButton } from '@/components/buttons';

const TransaksiHome = ({ searchParams }: { searchParams?: { query?: string; page?: string; } }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex flex-col items-center mb-5">
        <div className="flex items-center justify-between gap-1 mb-4">
          <Search />
          <CreateTransaksiButton />
        </div>
        <TransaksiTable query={query} currentPage={currentPage} />
      </div>
    </div>
  )
}

export default TransaksiHome