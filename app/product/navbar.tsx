"use client";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaAddressBook, FaCar } from "react-icons/fa";
import { LogoutButton } from "../admin/sign-out-button";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 fixed w-full z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/product" className="text-white font-bold text-xl">
                  Bom`s Rental
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/product"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md flex items-center transition duration-300"
                  >
                    <FaHome className="mr-2" />
                    Home
                  </Link>
                  <Link
                    href="/product/motor"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md flex items-center transition duration-300"
                  >
                    <FaCar className="mr-2" />
                    Vehicle
                  </Link>

                  <Link
                    href="/product/customer"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md flex items-center transition duration-300"
                  >
                    <FaAddressBook className="mr-2" />
                    Customer
                  </Link>

                  <Link
                    href="/product/order"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md flex items-center transition duration-300"
                  >
                    <FaAddressBook className="mr-2" />
                    Order
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                
                  <LogoutButton /> 
                 
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;