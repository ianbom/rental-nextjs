"use client";
import React from 'react'
import TransaksiForm from './table-order'
import Navbar from '../navbar';
import Footer from '../footer';

const Order = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-md mx-auto mt-20 mb-20">
      <TransaksiForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default Order