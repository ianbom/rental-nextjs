"use client";
import React from 'react'
import AddKendaraan from '@/kendaraan_components/create-kendaraan'

const CreateVechile = () => {
  return (
    <div className="max-w-md mx-auto mt-5">

      <h1 className="text-2xl text-center mb-2">Add New Vehcile</h1>
      <AddKendaraan />
    </div>
  )
}

export default CreateVechile