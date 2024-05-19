"use client";
import React from 'react'
import Search from '../search';
import TransactionTable from './transaction-table';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const TransactionPage = ({
    searchParams
}: {
    searchParams: { query: string; page: string };
}) => {

    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;
    
    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    useEffect(() => {
        if (!loading && !user) {
          router.push('/sign-in');
        }
      }, [loading, user, router]);
    
      if (loading) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <p className="text-white">Loading...</p>
          </div>
        );
      }
      console.log(user);

    return (
        <main className="flex flex-1 flex-col p-4 md:p-6">
            <div className="flex items-center mb-8">
                <h1 className="font-semibold text-lg md:text-2xl">Transaction List</h1>
            </div>
            <div className="w-full mb-4">
                <Search />
            </div>
            <TransactionTable query={query} currentPage={currentPage} />
        </main>
    );

}

export default TransactionPage