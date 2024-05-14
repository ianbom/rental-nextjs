export const formatDate = (dateStr: any) => {
    const date = new Date(dateStr);
    const formatter = new Intl.DateTimeFormat("id-ID", { 
        dateStyle: "medium", 
        timeStyle: "short", 
    }) ; 
    return formatter.format(date);
} 

// Pastikan fungsi ini tersedia di file utils atau file terpisah
export const formatCurrency = (value:any) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  };



  import { type ClassValue, clsx } from "clsx"
  import { twMerge } from "tailwind-merge"
  
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }


  import { PrismaClient } from "@prisma/client";

  export const prisma = new PrismaClient();
  
  
  
  
  


