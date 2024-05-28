"use client";
import { updateKendaraan } from '@/lib/kendaraan/actions';
import { Kendaraan } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { SubmitButton } from "@/components/buttons";
import { fetchVehicleTypes } from '@/lib/kendaraan/actions';
import { formatCurrency } from '../../../../../lib/utils';

const FormEditKendaraanNew = ({ kendaraan }: { kendaraan: Kendaraan }) => {
  const UpdateKendaraanWithPlat = updateKendaraan.bind(null, kendaraan.plat);
  const [state, formAction] = useFormState(UpdateKendaraanWithPlat, null);
  const [jenisKendaraanOptions, setJenisKendaraanOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    async function fetchAndPopulateOptions() {
      try {
        const vehicleTypes = await fetchVehicleTypes();
        if (vehicleTypes) {
          const options = vehicleTypes.map((jenis) => ({
            value: jenis.id,
            label: jenis.jenis,
          }));
          setJenisKendaraanOptions(options);
        }
      } catch (error) {
        console.error("Error fetching vehicle types:", error);
      }
    }

    fetchAndPopulateOptions();
  }, []);

  return (
    <div>
      <form action={formAction}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-5">
            <label htmlFor="plat" className="block text-sm font-medium text-white-900">
              Kode Kendaraan
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="plat"
              id="plat"
              placeholder="Kode Kendaraan..."
              defaultValue={kendaraan.plat}
            />
            <div id="plat-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.plat}</p>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="merk" className="block text-sm font-medium text-white-900">
              Merk
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="merk"
              id="merk"
              placeholder="Merk..."
              defaultValue={kendaraan.merk}
            />
            <div id="merk-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{}</p>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="warna" className="block text-sm font-medium text-white-900">
              Warna
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="warna"
              id="warna"
              placeholder="Warna..."
              defaultValue={kendaraan.warna}
            />
            <div id="warna-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{}</p>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="tahun" className="block text-sm font-medium text-white-900">
              Tahun
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="tahun"
              id="tahun"
              placeholder="Tahun..."
              defaultValue={kendaraan.tahun}
            />
            <div id="tahun-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="mb-5">
            <label htmlFor="bahan_bakar" className="block text-sm font-medium text-white-900">
              Bahan Bakar
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="bahan_bakar"
              id="bahan_bakar"
              placeholder="Bahan Bakar..."
              defaultValue={kendaraan.bahan_bakar}
            />
            <div id="bahan_bakar-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{}</p>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="cc" className="block text-sm font-medium text-white-900">
              CC
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="cc"
              id="cc"
              placeholder="CC..."
              defaultValue={kendaraan.cc}
            />
            <div id="cc-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{}</p>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="harga_sewa" className="block text-sm font-medium text-white-900">
              Harga Sewa
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="harga_sewa"
              id="harga_sewa"
              placeholder="Harga Sewa..."
              defaultValue={formatCurrency(kendaraan.harga_sewa)}
            />
            <div id="harga_sewa-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.harga_sewa}</p>
            </div>
          </div>
        </div>



        <div className="flex justify-center mb-5 ">
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-white-900">
              Status
            </label>
            <div className="flex items-center mt-5 gap-8 ">
              <div className="flex items-center mr-4 ">
                <input
                  type="radio"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  name="status"
                  id="aktif"
                  value="aktif"
                  defaultChecked={kendaraan.status === true}
                />
                <label htmlFor="true" className="ml-2 block text-sm text-white-900">
                  Aktif
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  name="status"
                  id="non-aktif"
                  value="non-aktif"
                  defaultChecked={kendaraan.status === false}
                />
                <label htmlFor="false" className="ml-2 block text-sm text-white-900">
                  Non-Aktif
                </label>
              </div>
            </div>
            <div id="status-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.status}</p>
            </div>
          </div>
        </div>

        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{}</p>
        </div>

        <SubmitButton Label="update" />
      </form>
    </div>
  );
};

export default FormEditKendaraanNew;
