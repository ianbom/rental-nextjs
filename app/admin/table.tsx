"use client";
import React from 'react'
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import { useEffect, useState } from "react";

const TableVech = ({
  customers
}: any) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-[150px]">No</TableHead>
            <TableHead className="max-w-[150px]">Nama</TableHead>
            <TableHead className="hidden md:table-cell">Alamat</TableHead>
            <TableHead className="hidden md:table-cell">No Hp</TableHead>
            <TableHead className="hidden md:table-cell">NIK</TableHead>

            <TableHead className="hidden md:table-cell">Created_At</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((cust: any, index: any) => (
            <TableRow key={cust.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">{cust.name}</TableCell>
              <TableCell className="hidden md:table-cell">{cust.alamat}</TableCell>
              <TableCell className="hidden md:table-cell">{cust.hp}</TableCell>
              <TableCell className="hidden md:table-cell">{cust.nik}</TableCell>

              <TableCell className="hidden md:table-cell">{formatDate(cust.createdAt.toString())}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableVech