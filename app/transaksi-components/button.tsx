"use client";
import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import clsx from "clsx";
import { useFormStatus } from "react-dom";

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

export const SubmitTransaksiButton = ({ Label }: { Label: string }) => {
    const { pending } = useFormStatus();
    const className = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
        {
            "opacity-50 cursor-progress": pending
        }

    );

    return (
        <button type="submit"
            className={className}
            disabled={pending}>
            {Label === "save" ? (
                <span> {pending ? " Saving... " : "Save"} </span>) :
                (
                    <span>{pending ? "Updating... " : "Update"}</span>
                )}
        </button>
    );
};