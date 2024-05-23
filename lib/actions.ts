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

