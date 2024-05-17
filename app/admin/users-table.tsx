"use client";
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import { useEffect, useState } from "react";
import TableVech from "./table";

interface CustomerTableProps {
  query: string;
  currentPage: number;
}
interface Customer {
  id: string;
  name: string;
  alamat: string;
  hp: string;
  nik: string;
  createdAt: Date;

}
const CustomerTable: React.FC<CustomerTableProps> = ({
  query,
  currentPage,
}) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(`/api/customer?query=${query}&currentPage=${currentPage}`);
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, [query, currentPage]);


  return (
    <TableVech customers={customers} />
  );
};

export default CustomerTable;