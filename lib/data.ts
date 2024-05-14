import { prisma } from "@/lib/prisma";

export const getContacts = async (query: string, currentPage: number) => {
    try {
        const contact = await prisma.contact.findMany({ 
            where:{ 
                OR:[
                    { 
                        name:{ 
                            contains: query, 
                            mode: "insensitive" // tidak peduli kapital / ga
                        }
                    }, { 
                        phone:{ 
                            contains: query, 
                            mode: "insensitive" 
                    }
                
                    }
                ]
            }
        }); 
        return contact;
    } catch (error) {
        throw new Error('Failed to find data Contact');
    }
}

export const getContactsById = async (id: string) => {
    try {
        const contact = await prisma.contact.findUnique({
            where: {id}
        }); 
        return contact;
    } catch (error) {
        throw new Error('Failed to find data Contact');
    }
}


export const getCustomer = async (query: string, currentPage: number) => { 
    try {
      console.log('Fetching customers with query:', query);
        const customer = await prisma.customer.findMany({ 
            where:{ 
                OR:[
                    { 
                        name:{ 
                            contains: query, 
                            mode: "insensitive" // tidak peduli kapital / ga
                        }
                    }, { 
                        nik:{ 
                            contains: query, 
                            mode: "insensitive" 
                    }
                
                    }
                ]
            }
        }); 
        return customer;
    } catch (error) {
        throw new Error('Failed to find data Customer');
    }
}

export const getTransaksi = async (query: string, currentPage: number) => {
    try {
      const transaksi = await prisma.transaksi.findMany({
        where: {
          OR: [
            { customer_id: { contains: query, mode: "insensitive" } },
            { kendaraan_plat: { contains: query, mode: "insensitive" } },
          ],
        },
        select: {
          transaksiId: true,
          kendaraan: {
            select: {
              plat: true,
              harga_sewa: true,
            },
          },
          customer: { select: { name: true } },
          tgl_mulai_sewa: true,
          tgl_selesai_sewa: true,
          deskripsi: true,
          url_foto: true,
          createdAt: true,
          updatedAt: true,
        },
      });
  
      // Menghitung total harga untuk setiap transaksi
      const transaksiFull = transaksi.map((transaksi) => {
        const durasi = Math.ceil(
          (new Date(transaksi.tgl_selesai_sewa).getTime() -
            new Date(transaksi.tgl_mulai_sewa).getTime()) /
            (1000 * 60 * 60 * 24)
        );
        //const totalHarga = durasi * transaksi.kendaraan.harga_sewa;
        const totalHarga = durasi * Number(transaksi.kendaraan.harga_sewa);

        return {
          ...transaksi,
          total_harga: totalHarga,
        };
      });
  
      return transaksiFull;
    } catch (error) {
      throw new Error('Failed to find data Transaksi');
    }
  };