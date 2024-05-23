import CustomerForm from '@/app/customer-components/customer-create'
import React from 'react'

const CustomerCreate = () => {
  return (
    <div className="max-w-md mx-auto mt-5">
  
      <h1 className="text-2xl text-center mb-2">Add New Contact</h1>
      <CustomerForm />
    </div>
  )
}

export default CustomerCreate