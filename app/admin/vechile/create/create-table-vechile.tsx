"use client";
import { SubmitKendaraan } from "@/kendaraan_components/button";
import React, { useEffect, useState } from "react";


interface FormErrors {
    [key: string]: string;
}

const CreateKendaraanTable = () => {
    const [formData, setFormData] = useState<{
        plat: string;
        merk: string;
        warna: string;
        tahun: string;
        bahan_bakar: string;
        cc: number;
        harga_sewa: number;
        status: string;
        jenisKendaraan: string;
        images: File | null;
    }>({
        plat: "",
        merk: "",
        warna: "",
        tahun: "",
        bahan_bakar: "",
        cc: 0,
        harga_sewa: 0,
        status: "",
        jenisKendaraan: "",
        images: null,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file instanceof File) {
                setFormData({ ...formData, images: file });
            } else {
                setErrors({ ...errors, images: "Invalid file format" });
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("plat", formData.plat);
            formDataToSend.append("merk", formData.merk);
            formDataToSend.append("warna", formData.warna);
            formDataToSend.append("tahun", formData.tahun);
            formDataToSend.append("bahan_bakar", formData.bahan_bakar);
            formDataToSend.append("cc", formData.cc.toString());
            formDataToSend.append("harga_sewa", formData.harga_sewa.toString());
            formDataToSend.append("status", formData.status);
            formDataToSend.append("jenisKendaraan", formData.jenisKendaraan);
            if (formData.images instanceof File) {
                formDataToSend.append("images", formData.images);
            } else {
                throw new Error("Invalid file format");
            }

            const response = await fetch("/api/vechile", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                setMessage("Kendaraan berhasil disimpan");
                setFormData({
                    plat: "",
                    merk: "",
                    warna: "",
                    tahun: "",
                    bahan_bakar: "",
                    cc: 0,
                    harga_sewa: 0,
                    status: "",
                    jenisKendaraan: "",
                    images: null,
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
            console.error("Error:", error);
            setErrors({ ...errors, images: "Error processing file" });
        }
    };

    const [jenisKendaraanOptions, setJenisKendaraanOptions] = useState<{ id: string, jenis: string }[]>([]);

    useEffect(() => {
        const fetchJenisKendaraan = async () => {
            try {
                const response = await fetch("/api/fetch-jenis-kendaraan");
                if (response.ok) {
                    const data = await response.json();
                    setJenisKendaraanOptions(data);
                }
            } catch (error) {
                console.error("Failed to fetch jenis kendaraan:", error);
            }
        };

        fetchJenisKendaraan();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="mb-5">
                            <label htmlFor="plat" className="block text-sm font-medium text-white-900">
                                Kode Kendaraan
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                name="plat"
                                id="plat"
                                placeholder="Kode Kendaraan..."
                                value={formData.plat}
                                onChange={handleChange}
                                required
                            />
                            <div id="plat-error" aria-live="polite" aria-atomic="true">
                                <p className="mt-2 text-sm text-red-500">{errors.plat}</p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="warna" className="block text-sm font-medium text-white-900">
                                Warna
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                name="warna"
                                id="warna"
                                placeholder="Warna..."
                                value={formData.warna}
                                onChange={handleChange}
                                required
                            />
                            <div id="warna-error" aria-live="polite" aria-atomic="true">
                                <p className="mt-2 text-sm text-red-500">{errors.warna}</p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="bahan_bakar" className="block text-sm font-medium text-white-900">
                                Bahan Bakar
                            </label>
                            <input
                                type="text"
                                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                name="bahan_bakar"
                                id="bahan_bakar"
                                placeholder="Bahan Bakar..."
                                value={formData.bahan_bakar}
                                style={{ backgroundColor: '#d1d5db' }} 
                                onChange={handleChange}
                                required
                            />
                            <div id="bahan_bakar-error" aria-live="polite" aria-atomic="true">
                                <p className="mt-2 text-sm text-red-500">{errors.bahan_bakar}</p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="status" className="block text-sm font-medium text-white-900">
                                Status
                            </label>
                            <div className="flex items-center mt-2">
                                <input
                                    type="radio"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    name="status"
                                    id="aktif"
                                    value="aktif"
                                    checked={formData.status === "aktif"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="aktif" className="ml-2 block text-sm text-white-900">
                                    Aktif
                                </label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input
                                    type="radio"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    name="status"
                                    id="non-aktif"
                                    value="non-aktif"
                                    checked={formData.status === "non-aktif"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="non-aktif" className="ml-2 block text-sm text-white-900">
                                    Non-Aktif
                                </label>
                            </div>
                            <div id="status-error" aria-live="polite" aria-atomic="true">
                                <p className="mt-2 text-sm text-red-500">{errors.status}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-5">
                            <label htmlFor="merk" className="block text-sm font-medium text-white-900">
                                Merk
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                name="merk"
                                id="merk"
                                placeholder="Merk..."
                                value={formData.merk}
                                onChange={handleChange}
                                required
                            />
                            <div id="merk-error" aria-live="polite" aria-atomic="true">
                                <p className="mt-2 text-sm text-red-500">{errors.merk}</p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="tahun" className="block text-sm font-medium text-white-900">
                                Tahun
                            </label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                name="tahun"
                                id="tahun"
                                placeholder="Tahun..."
                                value={formData.tahun}
                                onChange={handleChange}
                                required
                            />
                            <div id="tahun-error" aria-live="polite" aria-atomic="true">
                                <p className="mt-2 text-sm text-red-500">{errors.tahun}</p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="cc" className="block text-sm font-medium text-white-900">
                                CC
                            </label>
                            <input
                                type="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                name="cc"
                                id="cc"
                                placeholder="CC..."
                                value={formData.cc}
                                onChange={handleChange}
                                required
                            />
                            <div id="cc-error" aria-live="polite" aria-atomic="true">
                                <p className="mt-2 text-sm text-red-500">{errors.cc}</p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="harga_sewa" className="block text-sm font-medium text-white-900">
                                Harga Sewa
                            </label>
                            <input
                                type="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                name="harga_sewa"
                                id="harga_sewa"
                                placeholder="Harga Sewa..."
                                value={formData.harga_sewa}
                                onChange={handleChange}
                                required
                            />
                            <div id="harga_sewa-error" aria-live="polite" aria-atomic="true">
                                <p className="mt-2 text-sm text-red-500">{errors.harga_sewa}</p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="jenisKendaraan" className="block text-sm font-medium text-white-900">
                                Jenis Kendaraan
                            </label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                name="jenisKendaraan"
                                id="jenisKendaraan"
                                value={formData.jenisKendaraan}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Pilih Jenis Kendaraan...</option>
                                {jenisKendaraanOptions.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.jenis}
                                    </option>
                                ))}
                            </select>
                            <div id="jenisKendaraan-error" aria-live="polite" aria-atomic="true">
                                <p className="mt-2 text-sm text-red-500">{errors.jenisKendaraan}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="images" className="block text-sm font-medium text-white-900">
                        Images
                    </label>
                    <input
                        type="file"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="images"
                        id="images"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                        multiple
                    />
                    <div id="images-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.images}</p>
                    </div>
                </div>

                <SubmitKendaraan Label="save" />
            </form>
            {message && <p className="mt-2 text-sm text-green-500">{message}</p>}
        </div>
    )
};

export default CreateKendaraanTable;
