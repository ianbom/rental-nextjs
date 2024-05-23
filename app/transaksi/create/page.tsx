import React from 'react'
import TransaksiForm from '@/app/transaksi-components/transaksi-create'


const TransaksiCreate = ({ 
    searchParams 
  }: 
  {
    searchParams?: {
        query?: string;
        page?: string;
    }
}

    ) => {

      const query = searchParams?.query || "";
      const currentPage = Number(searchParams?.page) || 1; 
    return (
        <div className="max-w-md mx-auto mt-5">
             <h1 className="text-2xl text-center mb-2">Upload Image </h1>
             <TransaksiForm/>
           </div>
         )
       }


export default TransaksiCreate