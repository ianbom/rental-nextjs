"use client"
import { useEffect, useState } from "react";
import { SubmitTransaksiButton } from "@/components/buttons";

interface FormErrors {
    [key: string]: string;
}

const TransaksiForm = () => {
    const [formData, setFormData] = useState<{
        tgl_mulai_sewa: string;
        tgl_selesai_sewa: string;
        deskripsi: string;
        kendaraan_plat: string;
        customer_id: string;
        url_foto: File | null;
    }>({
        tgl_mulai_sewa: "",
        tgl_selesai_sewa: "",
        deskripsi: "",
        kendaraan_plat: "",
        customer_id: "",
        url_foto: null,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [message, setMessage] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file instanceof File) {
                setFormData({ ...formData, url_foto: file });
            } else {
                setErrors({ ...errors, url_foto: "Invalid file format" });
                console.log(errors)
            }
        }
    };
    

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("tgl_mulai_sewa", formData.tgl_mulai_sewa);
            formDataToSend.append("tgl_selesai_sewa", formData.tgl_selesai_sewa);
            formDataToSend.append("deskripsi", formData.deskripsi);
            formDataToSend.append("kendaraan_plat", formData.kendaraan_plat);
            formDataToSend.append("customer_id", formData.customer_id);
            if (formData.url_foto instanceof File) {
                formDataToSend.append("url_foto", formData.url_foto);
            } else {
                throw new Error("Invalid file format");
            }
    
            const response = await fetch("/api/transaction", {
                method: "POST",
                body: formDataToSend,
            });
    
            if (response.ok) {
                setMessage("Transaksi berhasil disimpan");
                setFormData({
                    tgl_mulai_sewa: "",
                    tgl_selesai_sewa: "",
                    deskripsi: "",
                    kendaraan_plat: "",
                    customer_id: "",
                    url_foto: null,
                });
                setErrors({});
            } else {
                const data = await response.json();
                if (data.errors) {
                    setErrors(data.errors);
                } else {
                    setMessage(data.message);
                }
            }
        } catch (error) {
            console.log(error)
            console.error("Error:", error);
            setErrors({ ...errors, url_foto: "Error processing file" });
        }
    };
    

    interface Kendaraan {
        plat: string;
        merk: string;
    }
    
    interface Customer {
        id: string;
        name: string;
    }
    
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [kendaraanPlat, setKendaraanPlat] = useState<Kendaraan[]>([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch("/api/fetch-cust");
                if (response.ok) {
                    const data = await response.json();
                    setCustomers(data);
                }
            } catch (error) {
                console.error("Failed to fetch customers:", error);
            }
        };

        const fetchKendaraanPlat = async () => {
            try {
                const response = await fetch("/api/fetch-vechile");
                if (response.ok) {
                    const data = await response.json();
                    setKendaraanPlat(data);
                }
            } catch (error) {
                console.error("Failed to fetch kendaraan:", error);
            }
        };

        fetchCustomers();
        fetchKendaraanPlat();
    }, []);

    console.log(formData)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="kendaraan_plat" className="block text-sm font-medium text-gray-900">
                        Plat Kendaraan
                    </label>
                    <select
                        id="kendaraan_plat"
                        name="kendaraan_plat"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formData.kendaraan_plat}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="">Pilih Plat Kendaraan</option>
                        {kendaraanPlat.map((kendaraan) => (
                            <option key={kendaraan.plat} value={kendaraan.plat}>{kendaraan.merk} - {kendaraan.plat}</option>
                        ))}
                    </select>

                    <div id="kendaraan_plat-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.kendaraan_plat}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="customer_id" className="block text-sm font-medium text-gray-900">
                        Nama Customer
                    </label>
                    <select
                        id="customer_id"
                        name="customer_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formData.customer_id}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="">Pilih Nama Anda</option>
                        {customers.map((customer) => (
                            <option key={customer.id} value={customer.id}>{customer.name}</option>
                        ))}
                    </select>

                    <div id="customer_id-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.customer_id}</p>
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
                        value={formData.tgl_mulai_sewa}
                        onChange={handleChange}
                        required
                    />
                    <div id="tgl_mulai_sewa-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.tgl_mulai_sewa}</p>
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
                        value={formData.tgl_selesai_sewa}
                        onChange={handleChange}
                        required
                    />
                    <div id="tgl_selesai_sewa-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.tgl_selesai_sewa}</p>
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
                        value={formData.deskripsi}
                        rows={3}
                        placeholder="Deskripsi transaksi..."
                        onChange={handleChange}
                        required
                    />
                </div>

                <div id="deskripsi-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{errors.deskripsi}</p>
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
                        onChange={handleFileChange}
                    />

                    <div id="url_foto-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.url_foto}</p>
                    </div>
                </div>

                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                </div>
                <SubmitTransaksiButton Label="save" />
            </form>
        </div>
    )
}

export default TransaksiForm