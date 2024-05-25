import { getKendaraanByPlat } from '@/lib/kendaraan/data';
import { notFound } from 'next/navigation';
import { formatCurrency } from '@/lib/utils'; // Import fungsi formatCurrency jika diperlukan
import VechileShowDetail from '@/components/component/detail-vechile';

const ShowVechile = async ({ params }: { params: { plat: string } }) => {
    const plat = decodeURIComponent(params.plat);
  let kendaraan;

  try {
    kendaraan = await getKendaraanByPlat(plat);
    
  } catch (error) {
    console.error('Error fetching kendaraan:', error);
   
   console.log(error)
  }

  if (!kendaraan) {
    console.log('gagak kendaraan');
   
    return <div>Kendaraan tidak ditemukan {params.plat}</div>;
  }

  return (
    <div>
        <VechileShowDetail kendaraan={kendaraan}/>
    </div>
  );
};

export default ShowVechile;