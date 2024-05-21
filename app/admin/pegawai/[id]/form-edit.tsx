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
      <style jsx>{`
        input {
          color: black;
        }
      `}</style>
      <h1>Edit Pegawai</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Alamat</label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Umur</label>
          <input
            type="number"
            name="umur"
            value={formData.umur}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>No HP</label>
          <input
            type="text"
            name="no_hp"
            value={formData.no_hp}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gaji</label>
          <input
            type="text"
            name="gaji"
            value={formData.gaji}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPegawai;
