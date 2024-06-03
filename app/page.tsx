'use client';
import { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const [users] = useAuthState(auth);

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log('User signed in successfully:', res);
      setEmail('');
      setPassword('');

      if (users?.email == "ianalebom@gmail.com") {
        router.push('/admin')
      } if (users?.email != "ianalebom@gmail.com" && users?.email != null) {
        router.push('/product')
      }

    } catch (error) {
      console.error('Error signing in user:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In OKK</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Sign In
          </button>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error.message}</p>}
        <p className="mt-4 text-gray-400 text-center">
          Dont have an account?
          <Link href="/sign-up" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;