import { getKendaraanByPlat } from '@/lib/kendaraan/data';
import { notFound } from 'next/navigation';
import { formatCurrency } from '@/lib/utils'; // Import fungsi formatCurrency jika diperlukan
import VechileShowDetail from '@/components/component/detail-vechile';
import Navbar from '@/app/product/navbar';
import Footer from '@/app/product/footer';

const ShowVechileProduct = async ({ params }: { params: { plat: string } }) => {
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
        <Navbar/>
        <VechileShowDetail kendaraan={kendaraan}/>
        <Footer/>
       
    </div>
  );
};

export default ShowVechileProduct;