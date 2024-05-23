import { prisma } from "@/lib/prisma";
import { Kendaraan } from "@prisma/client";

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

// export const fetchVehicleTypes = async () => {
//     const vehicleTypes = await prisma.jenis.findMany({
//       select: { id: true, jenis: true } 
//     });
//     return vehicleTypes;
//   };



// export const getKendaraanByPlat = async (plat: string): Promise<Kendaraan> => {
//     try {
//       const kendaraan = await prisma.kendaraan.findUnique({ where: { plat } });
//       if (kendaraan) {
//         return {
//           plat: kendaraan.plat,
//           merk: kendaraan.merk,
//           warna: kendaraan.warna,
//           tahun: kendaraan.tahun,
//           bahan_bakar: kendaraan.bahan_bakar,
//           cc: kendaraan.cc,
//           harga_sewa: kendaraan.harga_sewa,
//           status: kendaraan.status,
//           jenisKendaraan: {select : {jenis: true}},
//               foto: {select : {image: true}},
//         };
//       }
//       return null;
//     } catch (error) {
//       throw new Error('Failed to find data Kendaraan');
//     }
//   };

