"use client";
import { useState } from "react";
import { SubmitCustomer } from "@/kendaraan_components/button";

interface FormErrors {
    name?: string;
    alamat?: string;
    hp?: string;
    nik?: string;
}

const CustomerForm = () => {
    const [formData, setFormData] = useState<{
        name: string;
        alamat: string;
        hp: string;
        nik: string;
    }>({
        name: "",
        alamat: "",
        hp: "",
        nik: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch("/api/customer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Berhasil mengirim data
                setMessage("Data pelanggan berhasil disimpan, silahkan kembali ke Halaman Utama ");
                setFormData({
                    name: "",
                    alamat: "",
                    hp: "",
                    nik: "",
                });
                setErrors({});
            } else {
                // Gagal mengirim data
                const data = await response.json();
                if (data.Error) {
                    setErrors(data.Error);
                } else {
                    setMessage(data.message);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                        Nama
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="name"
                        id="name"
                        placeholder="Nama Lengkap"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="alamat" className="block text-sm font-medium text-gray-900">
                        Alamat
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="alamat"
                        id="alamat"
                        placeholder="Alamat"
                        value={formData.alamat}
                        onChange={handleChange}
                    />
                    <div id="alamat-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.alamat}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="hp" className="block text-sm font-medium text-gray-900">
                        No Hp
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="hp"
                        id="hp"
                        placeholder="Nomor Hp"
                        value={formData.hp}
                        onChange={handleChange}
                    />
                    <div id="hp-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.hp}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="nik" className="block text-sm font-medium text-gray-900">
                        NIK
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="nik"
                        id="nik"
                        placeholder="Nomor Induk Keluarga"
                        value={formData.nik}
                        onChange={handleChange}
                    />
                    <div id="nik-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.nik}</p>
                    </div>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{message}</p>
                </div>
                <SubmitCustomer Label="save" />
            </form>
        </div>
    );
};

export default CustomerForm;