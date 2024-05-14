
"use server";
import {z} from "zod";
import {prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {redirect} from "next/navigation";
import { put } from "@vercel/blob";
 
const ContactSchema = z.object({ 
    name: z.string().min(3),
    phone: z.string().min(6)
})

export const saveContact = async (prevSate:any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse( Object.fromEntries(formData.entries()) );
    if(!validatedFields.success){ 
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.contact.create({ 
            data: {
                name: validatedFields.data.name,
                phone: validatedFields.data.phone
            }
        })
    } catch (error) {
        return {
            message: "Failed create conatct"
        }
    }
    revalidatePath("/contacts"), 
    redirect("/contacts")
};



export const updateContact = async (id:string, prevSate:any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse( Object.fromEntries(formData.entries()) );
    if(!validatedFields.success){ 
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.contact.update({ 
            data: {
                name: validatedFields.data.name,
                phone: validatedFields.data.phone
            }, 
            where: {id}
        })
    } catch (error) {
        return {
            message: "Failed update conatct"
        }
    }
    revalidatePath("/contacts"), 
    redirect("/contacts")
};




export const deleteContact = async (
    id: string
    ) => {

    try {
        await prisma.contact.delete({ 
            where: {id}
        })
    } catch (error) {
        return {
            message: "Failed delete conatct"
        }
    }
    revalidatePath("/contacts")

}


const CustomerSchema = z.object({ 
    name: z.string().min(3),
    alamat: z.string().min(3), 
    hp : z.string().min(3),
    nik: z.string().min(6)
})

export const saveCustomer = async (prevSate:any, formData: FormData) => {
    const validatedFields = CustomerSchema.safeParse( Object.fromEntries(formData.entries()) );
    if(!validatedFields.success){ 
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.customer.create({ 
            data: {
                name: validatedFields.data.name,
                alamat: validatedFields.data.alamat,
                hp: validatedFields.data.hp,
                nik: validatedFields.data.nik
            }
        })
    } catch (error) {
        return {
            message: "Failed create Customer"
        }
    }
    revalidatePath("/customer"), 
    redirect("/customer")
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
    url_foto: z.instanceof(File)
    .refine((file) => file.size > 0, { message: 'Image is required' })
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), {
      message: "Only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image size must be less than 4MB",
    }),
  });
  
  export const saveTransaksi = async (prevState: any, formData: FormData) => {
    const validatedFields = TransaksiSchema.safeParse(Object.fromEntries(formData.entries()));
  
    if (!validatedFields.success) {
      return { Error: validatedFields.error.flatten().fieldErrors };
    }
    
    const {url_foto} = validatedFields.data;
    const { url } = await put(url_foto.name, url_foto, { access: "public", multipart: true });

    try {
      await prisma.transaksi.create({
        data: {
          kendaraan_plat: validatedFields.data.kendaraan_plat,
          customer_id: validatedFields.data.customer_id,
          tgl_mulai_sewa: validatedFields.data.tgl_mulai_sewa,
          tgl_selesai_sewa: validatedFields.data.tgl_selesai_sewa,
          deskripsi: validatedFields.data.deskripsi,
          url_foto: url
        },
      });
    } catch (error) {
      return { message: "Failed to create Transaksi" };
    }
  
    revalidatePath("/transaksi");
    redirect("/transaksi");
  };

export const fetchCustomer = async () => {
    const customerName = await prisma.customer.findMany({
      select: { id: true, name: true } 
    });
    return customerName;
  };

  export const fetchVehiclePlat = async () => {
    const kendaraanPlat = await prisma.kendaraan.findMany({
      select: { plat: true, merk: true } 
    });
    return kendaraanPlat;
  };

