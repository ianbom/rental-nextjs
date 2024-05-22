"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

const EditPegawai = () => {
  const { id } = useParams();
  const router = useRouter();
  const [pegawai, setPegawai] = useState(null);
  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    umur: '',
    no_hp: '',
    gaji: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPegawai = async () => {
      if (!id) return;
      try {
        const response = await fetch(`/api/pegawai/${id}`);
        const data = await response.json();
        setPegawai(data);
        setFormData({
          nama: data.nama,
          alamat: data.alamat,
          umur: data.umur,
          no_hp: data.no_hp,
          gaji: data.gaji,
        });
        setLoading(false);
      } catch (error) {

        setLoading(false);
      }
    };
    fetchPegawai();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/pegawai/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          umur: Number(formData.umur),
          gaji: String(formData.gaji), // Konversikan gaji menjadi String
        }),
      });

      if (!response.ok) {
        throw new Error('Gagal mengupdate data pegawai');
      }

      router.push('/admin/pegawai');
    } catch (error) {

    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">Edit Pegawai</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-5">
              <label htmlFor="nama" className="block text-sm font-medium text-white-900">
                Nama
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="nama"
                id="nama"
                value={formData.nama}
                onChange={handleChange}
                required
              />
              <div id="nama-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">{}</p>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="alamat" className="block text-sm font-medium text-white-900">
                Alamat
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="alamat"
                id="alamat"
                value={formData.alamat}
                onChange={handleChange}
                required
              />
              <div id="alamat-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">{}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-5">
              <label htmlFor="umur" className="block text-sm font-medium text-white-900">
                Umur
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="umur"
                id="umur"
                value={formData.umur}
                onChange={handleChange}
                required
              />
              <div id="umur-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">{}</p>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="no_hp" className="block text-sm font-medium text-white-900">
                No HP
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="no_hp"
                id="no_hp"
                value={formData.no_hp}
                onChange={handleChange}
                required
              />
              <div id="no_hp-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">{}</p>
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="gaji" className="block text-sm font-medium text-white-900">
                Gaji
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="gaji"
                id="gaji"
                value={formData.gaji}
                onChange={handleChange}
                required
              />
              <div id="gaji-error" aria-live="polite" aria-atomic="true">
                <p className="mt-2 text-sm text-red-500">{}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPegawai;
