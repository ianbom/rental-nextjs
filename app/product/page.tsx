"use client";
import { Badge } from "@/components/ui/badge";
import Navbar from "./navbar";
import { useState, useEffect } from 'react';
import { formatCurrency, formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
import Image from "next/image";
import { log } from "console";
import CarCardList from "./car-card-list";
import Footer from "./footer";
import { aiCar } from "../../components/component/ai-car";
import LandingPage from "./landing";


interface Kendaraan {
    plat: string;
    merk: string;
    warna: string;
    tahun: number;
    jenis: { jenis: string };
    cc: number;
    harga_sewa: number;
    status: boolean;
    bahan_bakar: string;
    foto: { image: string }[];
    createdAt: Date;
}

const Section3 = ({
    searchParams }: {
        searchParams?: {
            query?: string;
            page?: string;
        }
    }) => {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;


    return (
        <>
            <Navbar />
            <LandingPage/>
            <Footer/>
        </>
    );
};

export default Section3;

