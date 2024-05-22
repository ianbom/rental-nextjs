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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";


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

    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/sign-in');
        } if (user?.email == "ianalebom@gmail.com") {
            router.push('/admin')
          }
    }, [loading, user, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <p className="text-white">Loading...</p>
            </div>
        );
    }
    console.log(user)
    return (
        <>
            <Navbar />
            <LandingPage />
            <Footer />
        </>
    );
};

export default Section3;

