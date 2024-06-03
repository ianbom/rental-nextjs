import { useFormStatus } from "react-dom";
import clsx from "clsx";
import Link from "next/link";
import { IoAddSharp, IoArrowForward, IoPencil, IoTrashOutline } from "react-icons/io5";
import Create from '@/image-components/create-image';
import { deleteVechile } from "@/lib/kendaraan/actions";
import { doneTransaction } from "@/lib/transaksi/action";


export const DoneTransaction = ({ plat }: { plat: string }) => {
    const handleDoneTransaction = async (e: React.FormEvent) => {
        e.preventDefault();
        await doneTransaction(plat);
        // Optionally, refresh the page or state to reflect changes
        window.location.reload(); // Refresh the page to see the changes
    };

    return (
        <form onSubmit={handleDoneTransaction}>
            <button
                type="submit"
                className="rounded-sm text-sm border p-1 hover:bg-gray-800">
                Done
            </button>
        </form>
    );
};