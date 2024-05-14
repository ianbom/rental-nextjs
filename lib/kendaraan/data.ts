import { prisma } from "@/lib/prisma";

export const getKendaraan = async (query: string, currentPage: number) => {
    try {
        const kendaraan = await prisma.kendaraan.findMany({ 
            where:{ 
                OR:[
                    { 
                        plat:{ 
                            contains: query, 
                            mode: "insensitive" // tidak peduli kapital / ga
                        }
                    }, { 
                        merk:{ 
                            contains: query, 
                            mode: "insensitive" 
                    }
                
                    }
                ]
            }, 
            select : { 
              plat: true,
              merk: true,
              warna: true,
              tahun: true,
              bahan_bakar: true,
              cc: true,
              harga_sewa: true,
              status: true,
              createdAt: true,
              jenis: {select : {jenis: true}},
              foto: {select : {image: true}},
            }
        }); 
        return kendaraan;
    } catch (error) {
        throw new Error('Failed to find data Kendaraan');
    }
}


export const getKendaraanByPlat = async (plat: string) => {
    try {
        const contact = await prisma.kendaraan.findUnique({
            where: {plat}
        }); 
        return contact;
    } catch (error) {
        throw new Error('Failed to find data Kendaraan ');
    }
}

