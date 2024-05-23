"use client";
import Search from "@/components/search";
import KendaraanTable from "@/kendaraan_components/kendaraan-table"
import { CreateKendaraanButton } from "@/kendaraan_components/button";
const KendaraanPage = ({
  searchParams }: {
    searchParams?: {
      query?: string;
      page?: string;
    }
  }
) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;


  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateKendaraanButton />
      </div>
      <KendaraanTable query={query} currentPage={currentPage} />
    </div>
  )
}

export default KendaraanPage

