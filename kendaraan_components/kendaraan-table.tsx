import { formatDate, formatCurrency } from "@/lib/utils";
import { EditButton, DeleteButton, ButtonDeleteKendaraan } from "@/components/buttons";
import { getKendaraan } from "@/lib/kendaraan/data";
import Image from 'next/image';


const KendaraanTable = async ({
    query, currentPage
}: {
    query: string;
    currentPage: number;
}

) => {
    const kendaraan = await getKendaraan(query, currentPage)
    console.log(kendaraan);
    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-grey-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">Plat</th>
                    <th className="py-3 px-6">Merk</th>
                    <th className="py-3 px-6">Warna</th>
                    <th className="py-3 px-6">Tahun</th>
                    <th className="py-3 px-6">Jenis</th>
                    <th className="py-3 px-6">Bahan Bakar</th>
                    <th className="py-3 px-6">CC</th>
                    <th className="py-3 px-6">Harga Sewa</th>
                    <th className="py-3 px-6">Status</th>
                    <th className="py-3 px-6">Image</th>
                    <th className="py-3 px-6">Created_At</th>
                    <th className="py-3 px-6 text-center">Actions </th>
                </tr>
            </thead>
            <tbody>
                {kendaraan.map((kendaraan, index) => (
                    <tr key={kendaraan.plat} className="bg-white border-b">
                        <td className="py-3 px-6">{kendaraan.plat}</td>
                        <td className="py-3 px-6">{kendaraan.merk}</td>
                        <td className="py-3 px-6">{kendaraan.warna}</td>
                        <td className="py-3 px-6">{kendaraan.tahun}</td>
                        <td className="py-3 px-6">{kendaraan.jenis.jenis || 'No Type'}</td>
                        <td className="py-3 px-6">{kendaraan.bahan_bakar}</td>
                        <td className="py-3 px-6">{kendaraan.cc}</td>

                       
                        <td className="py-3 px-6">{kendaraan.status ? 'Tersedia' : 'Tidak Tersedia'}</td>
                        <td className="py-3 px-6">
                            <div className="flex flex-wrap gap-2">
                                {kendaraan.foto.map((foto, index) => (
                                    <Image
                                        key={`${kendaraan.plat}-${index}`}
                                        src={foto.image}
                                        alt={`${kendaraan.plat}-${index}`}
                                        width={100}
                                        height={100}
                                    />
                                ))}
                            </div>
                        </td>
                        <td className="py-3 px-6">{formatDate(kendaraan.createdAt.toString())}</td>
                        <td className="flex justify-center gap-1 py-3">
                            <EditButton id="" />
                            <ButtonDeleteKendaraan plat={kendaraan.plat}/>
                        </td>
                    </tr>
                )
                )}

            </tbody>
        </table>
    )
}

export default KendaraanTable