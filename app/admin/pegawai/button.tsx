"use client";
import { useState } from 'react';

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