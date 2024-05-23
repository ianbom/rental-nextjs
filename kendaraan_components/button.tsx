import { useFormStatus } from "react-dom";
import clsx from "clsx";
import Link from "next/link";
import { IoAddSharp, IoArrowForward, IoPencil, IoTrashOutline } from "react-icons/io5";
import Create from '@/image-components/create-image';



export const SubmitKendaraan = ({ Label }: { Label: string }) => {
    const { pending } = useFormStatus();
    const className = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
        {
            "opacity-50 cursor-progress": pending
        }

    );

    return (
        <button type="submit"
            className={className}
            disabled={pending}>
            {Label === "save" ? (
                <span> {pending ? " Saving... " : "Save"} </span>) :
                (
                    <span>{pending ? "Updating... " : "Update"}</span>
                )}
        </button>
    );
};

export const CreateKendaraanButton = () => {
    return (
        <Link
            href="/kendaraan/create"
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">

            <IoAddSharp size={20} />
            Create
        </Link>
    )
}

export const SubmitImage = () => {
    const { pending } = useFormStatus();
    const className = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
        {
            "opacity-50 cursor-progress": pending
        }

    );

    return (
        <button type="submit"
            className={className}
            disabled={pending}> Upload Image
        </button>
    );
};


export const CreateImageButton = () => {
    return (
        <Link
            href="/image/create"
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">

            <IoAddSharp size={20} />
            Create
        </Link>
    )
}

export const SubmitCustomer = ({ Label }: { Label: string }) => {
    const { pending } = useFormStatus();
    const className = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
        {
            "opacity-50 cursor-progress": pending
        }

    );

    return (
        <button type="submit"
            className={className}
            disabled={pending}>
            {Label === "save" ? (
                <span> {pending ? " Saving... " : "Save"} </span>) :
                (
                    <span>{pending ? "Updating... " : "Update"}</span>
                )}
        </button>
    );
};


export const GoAdmin = () => {
    return (
        <Link
            href="/admin"
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">

            <IoArrowForward size={10} />
            Go Admin
        </Link>
    )
}

export const SubmitPegawai = ({ Label }: { Label: string }) => {
    const { pending } = useFormStatus();
    const className = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
        {
            "opacity-50 cursor-progress": pending
        }

    );

    return (
        <button type="submit"
            className={className}
            disabled={pending}>
            {Label === "save" ? (
                <span> {pending ? " Saving... " : "Save"} </span>) :
                (
                    <span>{pending ? "Updating... " : "Update"}</span>
                )}
        </button>
    );
};

export const SubmitTransaksiButton = ({ Label }: { Label: string }) => {
    const { pending } = useFormStatus();
    const className = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
        {
            "opacity-50 cursor-progress": pending
        }

    );

    return (
        <button type="submit"
            className={className}
            disabled={pending}>
            {Label === "save" ? (
                <span> {pending ? " Saving... " : "Save"} </span>) :
                (
                    <span>{pending ? "Updating... " : "Update"}</span>
                )}
        </button>
    );
};