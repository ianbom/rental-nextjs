"use client";
import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { useState } from "react";


export const EditKendaraanButton = ({ plat }: { plat: string }) => {
    return (
        <Link href={`/admin/vechile/edit/${plat}`} className="rounded-sm text-sm border p-1 hover:bg-gray-100">
            <IoPencil size={20} />
        </Link>
    );
};

export const CreateKendaraanNewApi = () => {
    return (
        <Link
            href="/admin/vechile/create"
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">

            <IoAddSharp size={20} />
            Create
        </Link>
    )
}