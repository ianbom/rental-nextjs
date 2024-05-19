"use client";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaAddressBook } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 fixed w-full z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white font-bold text-xl">
                  Bom`s Rental
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md flex items-center transition duration-300"
                  >
                    <FaHome className="mr-2" />
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md flex items-center transition duration-300"
                  >
                    <FaInfoCircle className="mr-2" />
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md flex items-center transition duration-300"
                  >
                    <FaAddressBook className="mr-2" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-gray-700 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
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