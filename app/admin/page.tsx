'use client';

import Search from './search';
import CustomerTable from './users-table';


export default function IndexPage({
  searchParams
}: {
  searchParams: { query: string; page: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;


  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Customer List</h1>
      </div>
      <div className="w-full mb-4">
        <Search />
      </div>
      <CustomerTable query={query} currentPage={currentPage} />
    </main>
  );
}
