import { formatDate, formatCurrency } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";
import { getCustomer } from "@/lib/data";

const CustomerTable = async ({
    query, currentPage
}: {
    query: string;
    currentPage: number;
}

) => {
    const customer = await getCustomer(query, currentPage)

    return (
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-sm text-grey-700 uppercase bg-gray-50">
                <tr>
                <th className="py-3 px-6">No</th>
                    <th className="py-3 px-6">Nama</th>
                    <th className="py-3 px-6">Alamat</th>
                    <th className="py-3 px-6">No Hp</th>
                    <th className="py-3 px-6">NIK</th>
                    <th className="py-3 px-6">Transaksi</th>
                    <th className="py-3 px-6">Created_At</th>
                    <th className="py-3 px-6 text-center">Actions </th>
                </tr>
            </thead>
            <tbody>
                {customer.map((customer, index) => (
                    <tr key={customer.id} className="bg-white border-b">
                        <td className="py-3 px-6">{index+1}</td>
                        <td className="py-3 px-6">{customer.name}</td>
                        <td className="py-3 px-6">{customer.alamat}</td>
                        <td className="py-3 px-6">{customer.hp}</td>
                        <td className="py-3 px-6">{customer.nik}</td>
                        <td className="py-3 px-6">Transaksi</td>
                        <td className="py-3 px-6">{formatDate(customer.createdAt.toString())}</td>
                        <td className="flex justify-center gap-1 py-3">
                            <EditButton id="" />
                            <DeleteButton id="" />
                        </td>
                    </tr>
                )
                )}

            </tbody>
        </table>
    )
}

export default CustomerTable