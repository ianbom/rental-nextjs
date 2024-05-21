"use client";
import { SubmitPegawai } from "@/kendaraan_components/button";
import { useState } from "react";

interface FormErrors {
    nama?: string;
    alamat?: string;
    umur?: number;
    gaji?: string;
    no_hp?: string;
}

const PegawaiForm = () => {
    const [formData, setFormData] = useState<{
        nama: string;
        alamat: string;
        umur: number;
        gaji: string;
        no_hp: string;
    }>({
        nama: "",
        alamat: "",
        umur: 0,
        gaji: "",
        no_hp: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [message, setMessage] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        const formDataWithNumericUmur = {
            ...formData,
            umur: Number(formData.umur),
        };

        try {
            const response = await fetch("/api/pegawai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDataWithNumericUmur),
            });
            if (response.ok) {
                setMessage("Pegawai berhasil disimpan");
                setFormData({
                    nama: "",
                    alamat: "",
                    umur: 0,
                    gaji: "",
                    no_hp: "",
                });
                setErrors({});
            } else {
                const data = await response.json();
                if (data.Error) {
                    setErrors(data.Error);
                } else {
                    setMessage(data.message);
                }
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-900">
                        Nama
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="nama"
                        id="nama"
                        placeholder="Nama Lengkap"
                        value={formData.nama}
                        onChange={handleChange}
                    />
                    <div id="nama-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.nama}</p>
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
                    <label htmlFor="umur" className="block text-sm font-medium text-gray-900">
                        Umur
                    </label>
                    <input
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="umur"
                        id="umur"
                        placeholder="Umur"
                        value={formData.umur}
                        onChange={handleChange}
                    />
                    <div id="umur-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.umur}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="gaji" className="block text-sm font-medium text-gray-900">
                        Gaji
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="gaji"
                        id="gaji"
                        placeholder="Gaji"
                        value={formData.gaji}
                        onChange={handleChange}
                    />
                    <div id="gaji-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.gaji}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="no_hp" className="block text-sm font-medium text-gray-900">
                        No. HP
                    </label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="no_hp"
                        id="no_hp"
                        placeholder="Nomor HP"
                        value={formData.no_hp}
                        onChange={handleChange}
                    />
                    <div id="no_hp-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{errors.no_hp}</p>
                    </div>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{message}</p>
                </div>
                <SubmitPegawai Label="save" />
            </form>
        </div>
    )

};
export default PegawaiForm;