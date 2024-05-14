"use client"
import { SubmitImage } from "@/kendaraan_components/button"
import { uploadImage } from "@/lib/kendaraan/actions"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"
import { fetchKendaraanPlat } from '../lib/kendaraan/actions';

const CreateImageForm = () => {
  const [state, formAction] = useFormState(uploadImage, null)
  const [platKendaraanOption, setPlatKendaraan] = useState<
    { value: string; label: string }[]>([]);

  console.log(uploadImage)
  console.log(formAction)

  useEffect(() => {
    async function fetchKendaraanPlatOption() {
      try {
        const platKendaraan = await fetchKendaraanPlat();

        if (platKendaraan) {
          const option = platKendaraan.map((kendaraan) => ({
            value: kendaraan.plat,
            label: kendaraan.plat
          }));
          setPlatKendaraan(option);
        }
      } catch (error) {
        console.error("Error fetching vehicle plat:", error);
      }
    }
    fetchKendaraanPlatOption();
  }, []);

  return (

    <div className="mb-4 pt-2">
      <form action={formAction}>

      <div className="mb-5">
                        <label htmlFor="kendaraan_plat" className="block text-sm font-medium text-gray-900">
                            Jenis Kendaraan
                        </label>
                        {platKendaraanOption.length > 0 &&
                            <select
                                id="kendaraan_plat"
                                name="kendaraan_plat"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            >
                                
                                {platKendaraanOption.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        }

                        <div id="kendaraan_plat-error" aria-live="polite" aria-atomic="true">
                            <p className="mt-2 text-sm text-red-500">{state?.error?.kendaraan_plat}</p>
                        </div>
                    </div>

        <div className="mb-5">
          <label htmlFor="title" className="block text-sm font-medium text-gray-900"> Title
          </label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="title" id="title" placeholder="Title" />
          <div id="title-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.error?.title}</p>
          </div>
        </div>

        <input type="file" name="image" className="file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 
       file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border border-gray-400 w-full " />

        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2 "> {state?.error?.image}</p>
        </div>

        <div className="mb-4 pt-4">
          <SubmitImage />
        </div>

      </form>

    </div>
  )

}
console.log(uploadImage)

export default CreateImageForm