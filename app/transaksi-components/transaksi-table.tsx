import { formatDate, formatCurrency } from "@/lib/utils";
import { getTransaksi } from "@/lib/transaksi/data";
import { DeleteTransaksi } from "./button";

const TransaksiTable = async ({
    query, currentPage
}: {
    query: string;
    currentPage: number;
}

) => {
    const transaksi = await getTransaksi(query, currentPage)

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-grey-700 uppercase bg-gray-50">
                <tr>
                <th className="py-3 px-6">No</th>
                    <th className="py-3 px-6">Kode Kendaraan</th>
                    <th className="py-3 px-6">Customer Name</th>
                    <th className="py-3 px-6">Tanggal Mulai Sewa</th>
                    <th className="py-3 px-6">Tanggal Selesai Sewa</th>
                    <th className="py-3 px-6">Total Harga</th>
                    <th className="py-3 px-6">Deskripsi</th>
                    <th className="py-3 px-6">Image</th>
                    <th className="py-3 px-6">Created_At</th>
                    <th className="py-3 px-6 text-center">Actions </th>
                </tr>
            </thead>
            <tbody>
                {transaksi.map((transaksi, index) => (
                    <tr key={transaksi.transaksiId} className="bg-white border-b">
                        <td className="py-3 px-6">{index+1}</td>
                        <td className="py-3 px-6">{transaksi.kendaraan.plat}</td>
                        <td className="py-3 px-6">{transaksi.customer.name}</td>
                        <td className="py-3 px-6">{formatDate(transaksi.tgl_mulai_sewa.toString())}</td>
                        <td className="py-3 px-6">{formatDate(transaksi.tgl_selesai_sewa.toString())}</td>
                        <td className="py-3 px-6">{transaksi.total_harga}</td>
                        <td className="py-3 px-6">{transaksi.deskripsi}</td>
                        <td className="py-3 px-6">{transaksi.url_foto}</td>
                        <td className="py-3 px-6">{formatDate(transaksi.createdAt.toString())}</td>
                        <td className="flex justify-center gap-1 py-3">
                            <p>Edit</p>
                            <DeleteTransaksi id="" />
                        </td>
                    </tr>
                )
                )}

            </tbody>
        </table>
    )
}

export default TransaksiTable