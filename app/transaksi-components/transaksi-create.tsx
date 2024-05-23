"use client";
import { useFormState } from "react-dom"
import { useEffect, useState } from "react";
import { fetchCustomer, fetchVehiclePlat, saveNewTransaksi } from "@/lib/transaksi/action";
import { SubmitTransaksiButton } from "@/kendaraan_components/button";

const TransaksiForm = () => {
    const [jenisKendaraanOptions, setJenisKendaraanOptions] = useState<
        { value: string; label: string }[]>([]);
    
        const [namaCustomerOption, setNamaCustomerOptions] = useState<
        { value: string; label: string }[]>([]);
    

    const [state, formAction] = useFormState(saveNewTransaksi, null);


    useEffect(() => {
        async function fetchKendaraanOption() {
            try {
                const vehicleTypes = await fetchVehiclePlat();
                if (vehicleTypes) {
                    const options = vehicleTypes.map((kendaraan) => ({
                        value: kendaraan.plat,
                        label: kendaraan.plat
                    }));
                    setJenisKendaraanOptions(options);
                }
            } catch (error) {
                console.error("Error fetching vehicle types:", error);
                
            }
        }

        fetchKendaraanOption();

        async function fetchCustomerOption() {
            try {
                const namaCustomer = await fetchCustomer();
                if(namaCustomer) {
                    const options = namaCustomer.map((customer) => ({
                        value: customer.id,
                        label: customer.name,
                    }));
                    setNamaCustomerOptions(options);
                }
            } catch (error) {
                console.error("Error fetching nama customer types:", error);
            }
        }

        fetchCustomerOption()


    }, []);




    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label htmlFor="kendaraan_plat" className="block text-sm font-medium text-gray-900">
                        Plat Kendaraan
                    </label>
                    {jenisKendaraanOptions.length > 0 &&
                        <select
                            id="kendaraan_plat"
                            name="kendaraan_plat"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        >
                            <option value="">Pilih Plat Kendaraan </option>
                            {jenisKendaraanOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    }

                    <div id="kendaraan_plat-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.kendaraan_plat}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="customer_id" className="block text-sm font-medium text-gray-900">
                        Nama Customer
                    </label>
                    {namaCustomerOption.length > 0 &&
                        <select
                            id="customer_id"
                            name="customer_id"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        >
                            <option value="">Pilih Nama Anda</option>
                            {namaCustomerOption.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    }

                    <div id="customer_id-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.customer_id}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="tgl_mulai_sewa" className="block text-sm font-medium text-gray-900">
                        Tanggal Mulai Sewa
                    </label>
                    <input
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="tgl_mulai_sewa"
                        id="tgl_mulai_sewa"
                        required
                    />
                    <div id="tgl_mulai_sewa-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.tgl_mulai_sewa}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="tgl_selesai_sewa" className="block text-sm font-medium text-gray-900">
                        Tanggal Selesai Sewa
                    </label>
                    <input
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="tgl_selesai_sewa"
                        id="tgl_selesai_sewa"
                        required
                    />
                    <div id="tgl_selesai_sewa-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.tgl_selesai_sewa}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-900">
                        Deskripsi
                    </label>
                    <textarea
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="deskripsi"
                        id="deskripsi"
                        rows={3}
                        placeholder="Deskripsi transaksi..."
                    ></textarea>
                    <div id="deskripsi-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.deskripsi}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="url_foto" className="block text-sm font-medium text-gray-900">
                        URL Foto
                    </label>
                    <input
                        type="file"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="url_foto"
                        id="url_foto"
                        placeholder="Upload Foto"
                    />
                    <div id="url_foto-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.url_foto}</p>
                    </div>
                </div>

                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                </div>
                <SubmitTransaksiButton Label="save" />
            </form>
        </div>
    )
}

export default TransaksiForm