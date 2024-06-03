'use client';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import Link from 'next/link';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e:any) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log('User created successfully:', res);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-start bg-cover bg-center relative" style={{ backgroundImage: "url('/pexels-pixabay-248747.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="p-8 rounded-xl border-2 border-gray-900 shadow-lg w-full max-w-md z-10 ml-36">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error.message}</p>}
        <p className="mt-4 text-gray-300 text-center">
          Already have an account?
          <Link href="/sign-in" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;