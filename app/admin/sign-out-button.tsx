// components/LogoutButton.tsx
"use client";

import { signOut } from 'firebase/auth';
import { auth } from '@/app/firebase/config';
import { SettingsIcon } from '@/components/icons';

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut(auth)}
      className="flex items-center gap-2 font-medium text-red-600 hover:text-red-800"
    >
      <SettingsIcon className="h-4 w-4" />
      Logout
    </button>
  );
}
