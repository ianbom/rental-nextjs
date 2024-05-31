"use client";
import './globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, SettingsIcon, UsersIcon, VercelLogo, VehicleIcon } from '@/components/icons';
import { NavItem } from './nav-item';
import { useState } from 'react';
import { FaInfoCircle, FaTimes, FaUserTie } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';


// export const metadata = {
//   title: 'Next.js App Router + NextAuth + Tailwind CSS',
//   description: 'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/sign-in');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="dark">
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link className="flex items-center gap-2 font-semibold" href="/admin">
                  <Logo />
                  <span className="">Bom </span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <NavItem href="/admin">
                    <UsersIcon className="h-4 w-4" /> Customer
                  </NavItem>
                  <NavItem href="/admin/vechile">
                    <SettingsIcon className="h-4 w-4" /> Vehicle
                  </NavItem>
                  <NavItem href="/admin/transaction">
                    <VercelLogo className="h-4 w-4" /> Transaction
                  </NavItem>
                  <NavItem href="/admin/pegawai">
                    <FaUserTie  className="h-4 w-4" /> Pegawai
                  </NavItem>
                </nav>
              </div>
              <div className="border-t px-4 py-4">
                {/* Tombol untuk membuka modal profil */}
                <button
                  className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  onClick={() => setShowProfileModal(!showProfileModal)}
                >
                  <FaInfoCircle className="mr-2" /> Profile
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              <Link className="flex items-center gap-2 font-semibold lg:hidden" href="/">
                <Logo />
                <span className="">ACME</span>
              </Link>
            </header>
            {children}
          </div>
        </div>

        {/* Modal Profil */}
        {showProfileModal && (
          <div className="fixed bottom-0 left-0 z-50 m-4">
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
                <button onClick={() => handleLogout()}> Logout</button>
              </button>
            </div>
          </div>
        )}

        <Analytics />
      </body>
    </html>
  );
}