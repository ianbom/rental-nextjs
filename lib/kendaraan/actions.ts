"use server";
import { z } from "zod";
import { prisma } from "@/lib/prisma"; // impor prisma dari file lib/prisma.ts
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { put } from "@vercel/blob";


const KendaraanSchema = z.object({
  plat: z.string().min(3),
  merk: z.string().min(3),
  warna: z.string().min(1),
  tahun: z.string().min(1),
  bahan_bakar: z.string().min(1),
  cc: z.number().int(),
  harga_sewa: z.number(),
  status: z.boolean(),
  jenisKendaraan: z.string(), 

});


export const addKendaraan = async (prevState: any, formData: FormData) => {
  console.log(formData);
  const validatedFields = KendaraanSchema.safeParse({
    plat: formData.get('plat'),
    merk: formData.get('merk'),
    warna: formData.get('warna'),
    tahun: formData.get('tahun'),
    bahan_bakar: formData.get('bahan_bakar'),
    cc: Number(formData.get('cc')),
    harga_sewa: Number(formData.get('harga_sewa')),
    status: formData.get('status') === 'aktif',
    jenisKendaraan: formData.get('jenisKendaraan'),
  });

  if (!validatedFields.success) {
    return { Error: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const newKendaraan = await prisma.kendaraan.create({
      data: validatedFields.data,
    });

    const images = formData.getAll('images') as File[];

    if (images.length > 0) {
      const validatedImages = images.filter((file) => {
        return (
          file.size > 0 &&
          file.type.startsWith('image/') &&
          file.size < 4000000
        );
      });

      const uploadedImages = await Promise.all(
        validatedImages.map(async (file) => {
          const { url } = await put(file.name, file, {
            access: 'public',
            multipart: true,
          });
          return url;
        })
      );

      await Promise.all(
        uploadedImages.map(async (imageUrl) => {
          await prisma.foto.create({
            data: {
              title: '', // Isi dengan judul yang sesuai
              image: imageUrl,
              kendaraan_plat: newKendaraan.plat,
            },
          });
        })
      );
    }
  } catch (error: any) {
    return { error: 'Failed create kendaraan', errorMessage: error.message };
  }

  revalidatePath('/kendaraan/create');
  redirect('/kendaraan/create');
};




export const getImages = async () => { 
  try {
      const result = await prisma.foto.findMany({ 
          orderBy: {
             title: "desc"
          }, 
          });
      return result;
  } catch (error) {
      throw new Error('Failed to find data Foto');
  }
}




const ImageSchema = z.object({
  title: z.string().min(1),
  kendaraan_plat: z.string(),
  image: z.instanceof(File)
    .refine((file) => file.size > 0, { message: 'Image is required' })
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), {
      message: "Only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image size must be less than 4MB",
    }),
});

export const uploadImage = async (prevState: unknown, formData: FormData) => {
  const validatedFields = ImageSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { image, title, kendaraan_plat } = validatedFields.data;
  const { url } = await put(image.name, image, { access: "public", multipart: true });

  try {
    await prisma.foto.create({
      data: {
        title,
        kendaraan_plat: kendaraan_plat,
        image: url,

      },
    });
  } catch (error) {
    return { message: "Failed to create image" };
  }

  revalidatePath("/image");
  redirect("/image");
};

export const fetchKendaraanPlat = async () => {
  const platKendaraan = await prisma.kendaraan.findMany({
    select: { plat: true, merk: true } 
  });
  return platKendaraan;
};


export const deleteKendaraan = async (plat: string) => {
  try {
    const response = await fetch(`/api/vechile/${plat}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // Lakukan operasi tambahan setelah data berhasil dihapus, jika diperlukan
      console.log('Data kendaraan berhasil dihapus');
    } else {
      console.error('Gagal menghapus data kendaraan');
    }
  } catch (error) {
    console.error('Gagal menghapus data kendaraan:', error);
  }
};



export const fetchVehicleTypes = async () => {
  try {
      const vechileTypes = await prisma.jenis.findMany({ 
          select: { 
              id: true, jenis: true
          }
      }); return vechileTypes;
  } catch (error) {
      console.log(error);
      return null;
  }
};