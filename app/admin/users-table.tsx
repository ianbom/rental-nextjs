'use client';
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";
import { getCustomer } from "@/lib/data";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';

const CustomerTable = async ({ query, currentPage }: { query: string; currentPage: number; }) => {

  const customer = await getCustomer(query, currentPage)
  console.log(customer);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="max-w-[150px]">No</TableHead>
          <TableHead className="max-w-[150px]">Nama</TableHead>
          <TableHead className="hidden md:table-cell">Alamat</TableHead>
          <TableHead className="hidden md:table-cell">No Hp</TableHead>
          <TableHead className="hidden md:table-cell">NIK</TableHead>
          <TableHead className="hidden md:table-cell">Transaksi</TableHead>
          <TableHead className="hidden md:table-cell">Created_At</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customer.map((cust, index) => (
          <TableRow key={cust.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">{cust.name}</TableCell>
            <TableCell className="hidden md:table-cell">{cust.alamat}</TableCell>
            <TableCell className="hidden md:table-cell">{cust.hp}</TableCell>
            <TableCell className="hidden md:table-cell">{cust.nik}</TableCell>
            <TableCell className="hidden md:table-cell">Transaksi</TableCell>
            <TableCell className="hidden md:table-cell">{formatDate(cust.createdAt.toString())}</TableCell>
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

export default CustomerTable;