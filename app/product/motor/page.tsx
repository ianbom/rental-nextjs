'use client';
import React from 'react'
import Navbar from '../navbar'
import CarCardList from '../car-card-list';
import Footer from '../footer';


const CardPage = ({
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

            <CarCardList query={query} currentPage={currentPage} />
            <Footer />
        </>
    )
}

export default CardPage