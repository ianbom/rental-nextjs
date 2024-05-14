import Image from "next/image";
import type { Foto } from "@prisma/client";

const Card = ({ data }: { data: Foto }) => {
    
    console.log(data.image)
    console.log(data.title)
    console.log(data)
    return (
        
        <div className="max-w-sm border border-gray-200 rounded-md shadow">
            <div className="relative aspect-video">
            <Image
                    src = {data.image} 
                    alt = {data.kendaraan_plat}
                    height={500}
                    width={500}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-t-md object-cover"
                />
            </div>
            <div className="p-5">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {data.title}
                </h1>
            </div>
            <div className="flex items-center justify-between">
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    );
};

export default Card;