// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { getKendaraanByPlat } from '@/lib/kendaraan/data';

// interface Kendaraan {
//   plat: string;
//   merk: string;
//   warna: string;
//   tahun: number;
//   bahan_bakar: string;
//   cc: number;
//   harga_sewa: number;
//   status: boolean;
// }

// const EditKendaraanPage = () => {
//   const router = useRouter();
//   const { plat } = router.query;
//   const [kendaraan, setKendaraan] = useState<Kendaraan | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (plat) {
//           const data = await getKendaraanByPlat(plat as string);
//           setKendaraan(data);
//         }
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [plat]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Halaman Show</h1>
//       <h1 style={{ color: 'white' }}>Edit Kendaraan: {plat}</h1>
//       <p style={{ color: 'white' }}>Merk: {kendaraan?.merk ?? 'Tidak ada data'}</p>
//       <p>Warna: {kendaraan?.warna ?? 'Tidak ada data'}</p>
//       <p>Tahun: {kendaraan?.tahun ?? 'Tidak ada data'}</p>
//       <p>Bahan Bakar: {kendaraan?.bahan_bakar ?? 'Tidak ada data'}</p>
//       <p>CC: {kendaraan?.cc ?? 'Tidak ada data'}</p>
//       <p>Harga Sewa: {kendaraan?.harga_sewa ?? 'Tidak ada data'}</p>
//       <p>Status: {kendaraan?.status ? 'Tersedia' : 'Tidak Tersedia'}</p>
//     </div>
//   );
// };

// export default EditKendaraanPage;