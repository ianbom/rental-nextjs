"use client";
import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteContact } from "@/lib/actions";
import { deleteKendaraan } from '../lib/kendaraan/actions';

export const CreateButton = () => {
    return (
        <Link
            href="/contacts/create"
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">

            <IoAddSharp size={20} />
            Create
        </Link>
    )
}

export const EditButton = ({ id }: { id: string }) => {
    return (
        <Link
            href={`/contacts/edit/${id}`}
            className="rounded-sm text-sm border p-1 hover:bg-gray-100">

            <IoPencil size={20} />

        </Link>
    )
}

export const EditKendaraanButton = ({ plat }: { plat: string }) => {
    return (
        <Link
            href={`/admin/vechile/edit/${plat}`}
            className="rounded-sm text-sm border p-1 hover:bg-gray-100">

            <IoPencil size={20} />

        </Link>
    )
}

export const DeleteButton = ({ id }: { id: string }) => {
    const DeleteContactWithId = deleteContact.bind(null, id);
    return (
        <form action={DeleteContactWithId}>
            <button
                className="rounded-sm text-sm border p-1 hover:bg-gray-100">

                <IoTrashOutline size={20} />

            </button>
        </form>

    )
}

export const SubmitButton = ({ Label }: { Label: string }) => {
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

export const CreateCustomerButton = () => {
    return (
        <Link
            href="/customer/create"
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">

            <IoAddSharp size={20} />
            Create
        </Link>
    )
}




export const CreateTransaksiButton = () => {
    return (
        <Link
            href="/transaksi/create"
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">

            <IoAddSharp size={20} />
            Create
        </Link>
    )
}


export const ButtonDeleteKendaraan = ({ plat }: { plat: string }) => {
    const handleDeleteKendaraan = async () => {
      try {
        await deleteKendaraan(plat);
      } catch (error) {
        console.error('Gagal menghapus data kendaraan:', error);
      }
    };
  
    return (
      <button
        className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
        onClick={handleDeleteKendaraan}
      >
        <IoTrashOutline size={20} />
      </button>
    );
  };


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