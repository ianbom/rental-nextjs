"use client";
import React, { useEffect } from 'react'

import Navbar from '../navbar'
import Footer from '../footer'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config';
import CustomerForm from '@/app/customer-components/customer-create';

const CustomerPageClient = () => {
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
  console.log(user)
  return (
    <div className="">
      <Navbar />
      <div className="max-w-md mx-auto mt-24 mb-24">

        <h1 className="text-2xl text-center mb-4">Silahkan Melengkapi Data Diri Anda</h1>
        <CustomerForm />
      </div>
      <Footer />
    </div>
  )
}

export default CustomerPageClient