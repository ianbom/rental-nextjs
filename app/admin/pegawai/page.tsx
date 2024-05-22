import React from 'react'
import PegawaiTable from './table-pegawai'
import Search from '../search';
import { CreatePegawai } from './button';

const PegawaiPage = ({ searchParams }: { searchParams: { query: string; page: string } }) => {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
            <div className="flex items-center mb-8">
                <h1 className="font-semibold text-lg md:text-2xl">Vechile List</h1>
            </div>
            
            <div className="flex items-center justify-between gap-1 mb-5">
            <Search />
            <CreatePegawai/>
      </div>
      
            <PegawaiTable query={query} currentPage={currentPage} />
        </main>
  )
}

export default PegawaiPage