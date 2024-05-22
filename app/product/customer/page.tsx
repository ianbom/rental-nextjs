"use client";
import React, { useEffect } from 'react'
import CustomerForm from './create-table'
import Navbar from '../navbar'
import Footer from '../footer'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config';

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
      <div className="max-w-md mx-auto mt-20 mb-20">
        <CustomerForm />
      </div>
      <Footer />
    </div>
  )
}

export default CustomerPageClient