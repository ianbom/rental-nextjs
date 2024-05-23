import { addKendaraan } from "@/lib/kendaraan/actions";
import { useFormState } from "react-dom"
import { SubmitKendaraan } from "../kendaraan_components/button"
import { useEffect, useState } from "react";
import { fetchVehicleTypes } from "@/lib/kendaraan/actions";



const AddKendaraan = () => {
    const [jenisKendaraanOptions, setJenisKendaraanOptions] = useState<
        { value: string; label: string }[]>([]);
    const [state, formAction] = useFormState(addKendaraan, null);


    useEffect(() => {
        async function fetchAndPopulateOptions() {
            try {
                const vehicleTypes = await fetchVehicleTypes();
                if (vehicleTypes) {
                    const options = vehicleTypes.map((jenis) => ({
                        value: jenis.id,
                        label: jenis.jenis,
                    }));
                    setJenisKendaraanOptions(options);
                }
            } catch (error) {
                console.error("Error fetching vehicle types:", error);
                // Handle the error appropriately, e.g., display an error message to the user
            }
        }

        fetchAndPopulateOptions();
    }, []);




    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label htmlFor="plat" className="block text-sm font-medium text-gray-900"> Kode Kendaraan </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="plat" id="plat" placeholder="Kode Kendaraan..." />
                    <div id="plat-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.plat}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="merk" className="block text-sm font-medium text-gray-900"> Merk </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="merk" id="merk" placeholder="Merk..." />
                    <div id="merk-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.merk}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="warna" className="block text-sm font-medium text-gray-900"> Warna </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="warna" id="warna" placeholder="Warna..." />
                    <div id="warna-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.warna}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="tahun" className="block text-sm font-medium text-gray-900"> Tahun </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="tahun" id="tahun" placeholder="Tahun..." />
                    <div id="tahun-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.tahun}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="bahan_bakar" className="block text-sm font-medium text-gray-900"> Bahan Bakar </label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="bahan_bakar" id="bahan_bakar" placeholder="Bahan Bakar..." />
                    <div id="bahan_bakar-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.bahan_bakar}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="cc" className="block text-sm font-medium text-gray-900"> CC </label>
                    <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="cc" id="cc" placeholder="CC..." />
                    <div id="cc-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.cc}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="harga_sewa" className="block text-sm font-medium text-gray-900"> Harga Sewa </label>
                    <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="harga_sewa" id="harga_sewa" placeholder="Harga Sewa..." />
                    <div id="harga_sewa-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.harga_sewa}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-900"> Status </label>
                    <div className="flex items-center mt-2">
                        <input type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" name="status" id="aktif" value="aktif" />
                        <label htmlFor="true" className="ml-2 block text-sm text-gray-900">Aktif</label>
                    </div>
                    <div className="flex items-center mt-2">
                        <input type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" name="status" id="non-aktif" value="non-aktif" />
                        <label htmlFor="false" className="ml-2 block text-sm text-gray-900">Non-Aktif</label>
                    </div>

                    <div id="status-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.status}</p>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="jenis_kendaraan" className="block text-sm font-medium text-gray-900">
                            Jenis Kendaraan
                        </label>
                        {jenisKendaraanOptions.length > 0 &&
                            <select
                                id="jenisKendaraan"
                                name="jenisKendaraan"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required// tambahkan properti required
                            >
                                <option value="">Pilih Jenis Kendaraan</option>  {/* Placeholder option */}
                                {jenisKendaraanOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        }

                        <div id="jenis_kendaraan-error" aria-live="polite" aria-atomic="true">
                            <p className="mt-2 text-sm text-red-500">{state?.Error?.jenisKendaraan}</p>
                        </div>
                    </div>

                </div>

                <div className="mb-5">
                    <label htmlFor="images" className="block text-sm font-medium text-gray-900">
                        Foto Kendaraan
                    </label>
                    <input
                        type="file"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="images"
                        id="images"
                        multiple
                        accept="image/*"
                    />
                </div>

                {/* Other form inputs */}

                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.errorMessage}</p>
                </div>

                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.errorMessage}</p>
                </div>
                <SubmitKendaraan Label="save" />
            </form>
        </div>
    )
}

export default AddKendaraan
