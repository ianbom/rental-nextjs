
import { getKendaraanByPlat } from "@/lib/kendaraan/data";
import FormEditKendaraanNew from "./formEditVech";


const EditVechileNewPage = async ({params}: {params: {plat: string}}) => {
    const plat = decodeURIComponent(params.plat);
    const kendaraan = await getKendaraanByPlat(plat);

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1> Edit Data Kendaraan {kendaraan.plat}</h1>
      </div>
        <FormEditKendaraanNew kendaraan = {kendaraan}/>
    
    </div>
  )
}

export default EditVechileNewPage