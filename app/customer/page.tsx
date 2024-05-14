import React from 'react'
import CustomerTable from '../customer-components/customer-table'
import { CreateCustomerButton } from '@/components/buttons';
import Search from '@/components/search';


const CustomerPage = ({
    searchParams }: {
        searchParams?: {
            query?: string;
            page?: string;
        }
    }
) => {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
                <Search />
                <CreateCustomerButton />
            </div>
            <CustomerTable query={query} currentPage={currentPage} />
        </div>
    )
}

export default CustomerPage