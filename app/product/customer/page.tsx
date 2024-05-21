"use client";
import React from 'react'
import CustomerForm from './create-table'
import Navbar from '../navbar'
import Footer from '../footer'

const CustomerPageClient = () => {
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