"use client";

import React from 'react'
import Search from '../search';
import VechileTable from './vechile-table';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { CreateKendaraanNewApi } from './create/button';

const VechilePage = ({
    searchParams }: {
        searchParams?: {
            query?: string;
            page?: string;
        }
    }
) => {
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
                <h1 className="font-semibold text-lg md:text-2xl">Vechile List</h1>
            </div>
            
            <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateKendaraanNewApi />
      </div>
            <VechileTable query={query} currentPage={currentPage} />
        </main>
    );

}

export default VechilePage

