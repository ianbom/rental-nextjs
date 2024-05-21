import React from 'react'
import PegawaiTable from './table-pegawai'

const PegawaiPage = ({ searchParams }: { searchParams: { query: string; page: string } }) => {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div>
      <PegawaiTable query={query} currentPage={currentPage} />
    </div>
  )
}

export default PegawaiPage