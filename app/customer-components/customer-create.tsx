"use client";
import { useFormState } from "react-dom"
import { useEffect, useState } from "react";
import { prisma } from "@/lib/prisma";
import { saveCustomer } from "@/lib/actions";
import { error } from 'console';
import { SubmitCustomer } from "@/kendaraan_components/button";

const CustomerForm = () => {
    const [state, formAction] = useFormState(saveCustomer, null);

    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900"> Nama </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="name" id="name" placeholder="Nama Lengkap" />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="alamat" className="block text-sm font-medium text-gray-900"> Alamat </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="alamat" id="alamat" placeholder="Alamat" />
                    <div id="merk-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.alamat}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="hp" className="block text-sm font-medium text-gray-900"> No Hp </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="hp" id="hp" placeholder="Nomor Hp" />
                    <div id="hp-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.hp}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="nik" className="block text-sm font-medium text-gray-900"> NIK </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="nik" id="nik" placeholder="Nomor Induk Keluarga" />
                    <div id="nik-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.nik}</p>
                    </div>
                </div>

                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                </div>
                <SubmitCustomer Label="save" />
            </form>
        </div>
    )
}

export default CustomerForm
