"use server";
import {z} from "zod";
import {prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {redirect} from "next/navigation";
import { put } from "@vercel/blob";


export const fetchCustomer = async () => {
    try {
      const customerName = await prisma.customer.findMany({
        select: { id: true, name: true } 
      });
      return customerName;
    } catch (error) {
      console.log(error)
      return null
    }
  };

  export const fetchVehiclePlat = async () => {
    try {
      const kendaraanPlat = await prisma.kendaraan.findMany({
        where: {
          status: true, 
        },
        select: {
          plat: true,
          merk: true,
        },
      });
      return kendaraanPlat;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const TransaksiSchema = z.object({
    tgl_mulai_sewa: z.preprocess((arg) => {
      if (typeof arg == "string") return new Date(arg);
    }, z.date()),
    tgl_selesai_sewa: z.preprocess((arg) => {
      if (typeof arg == "string") return new Date(arg);
    }, z.date()),
    deskripsi: z.string().min(1),
    kendaraan_plat: z.string().min(1),
    customer_id: z.string().min(1),
  });
  
  export const saveNewTransaksi = async (prevState: any, formData: FormData) => {
    const validatedFields = TransaksiSchema.safeParse(Object.fromEntries(formData.entries()));
  
    if (!validatedFields.success) {
      return { Error: validatedFields.error.flatten().fieldErrors };
    }
  

    try {
      await prisma.transaksi.create({
        data: {
          kendaraan_plat: validatedFields.data.kendaraan_plat,
          customer_id: validatedFields.data.customer_id,
          tgl_mulai_sewa: validatedFields.data.tgl_mulai_sewa,
          tgl_selesai_sewa: validatedFields.data.tgl_selesai_sewa,
          deskripsi: validatedFields.data.deskripsi,
        },
      });
    } catch (error) {
      return { message: "Failed to create Transaksi" };
    }
  
    revalidatePath("/transaksi/create");
    redirect("/transaksi/create");
  };