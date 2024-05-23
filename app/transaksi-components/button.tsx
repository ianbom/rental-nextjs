"use client";
import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";


export const DeleteTransaksi = ({ id }: { id: string }) => {
    
    return (
            <button
                className="rounded-sm text-sm border p-1 hover:bg-gray-100">
                <IoTrashOutline size={20} />
            </button>
      
    )
}

export const CreateTransaksi = () => {
    return (
        <Link
            href="/transaksi/create"
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">

            <IoAddSharp size={20} />
            Create
        </Link>
    )
}

export const EditTransaksi = ({ id }: { id: string }) => {
    return (
        <Link
            href={`/transaksi/edit/${id}`}
            className="rounded-sm text-sm border p-1 hover:bg-gray-100">
            <IoPencil size={20} />

        </Link>
    )
}

