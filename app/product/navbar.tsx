"use client";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaAddressBook, FaCar, FaTimes, FaUserCircle, FaReceipt } from "react-icons/fa";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [user] = useAuthState(auth);
  const router = useRouter();
  
  // if (!user){ 
  //   router.push('/sign-in')
  // }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/sign-in');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <nav className="bg-black fixed w-full z-10">
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
                    <FaReceipt  className="mr-2" />
                    Order
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">

                <button
                  className="flex items-center justify-center rounded-full overflow-hidden w-10 h-10 bg-gray-200"
                  onClick={() => setShowProfileModal(!showProfileModal)}
                >
                  
                  <FaUserCircle className="text-gray-700 w-full h-full" />
                 
                </button>

              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-16"></div>

      {/* Modal Profil */}
      {showProfileModal && (
        <div className="fixed top-0 right-0 z-50 m-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-1 right-1 text-white hover:text-red-500"
              onClick={() => setShowProfileModal(false)}
            >
              <FaTimes />
            </button>
            <h2 className="text-lg font-bold text-white mb-2">Profile</h2>
            {/* Konten modal profil */}
            <p className="text-gray-400 mb-2">{user?.email}</p>
            {/* Tambahkan konten lain yang diperlukan */}
            <button
              className="mt-2 w-full py-1 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => setShowProfileModal(false)}
            >
               <button onClick={handleLogout}>Logout</button>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;