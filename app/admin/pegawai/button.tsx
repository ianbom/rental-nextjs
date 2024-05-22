"use client";
import Link from 'next/link';
import { useState } from 'react';
import { IoAddSharp } from 'react-icons/io5';

const DeletePegawaiButton = ({ id }: { id: string }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/pegawai?id=${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Gagal menghapus pegawai');
            }

            // Lakukan tindakan lain jika diperlukan, seperti memperbarui daftar pegawai
            console.log('Pegawai berhasil dihapus');
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleDelete}
                disabled={isLoading}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                {isLoading ? 'Menghapus...' : 'Hapus Pegawai'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default DeletePegawaiButton;


export const CreatePegawai = () => {
    return (
        <Link
            href="/admin/pegawai/create"
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">

            <IoAddSharp size={20} />
            Create
        </Link>
    )
}