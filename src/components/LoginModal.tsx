// LoginModal.tsx
"use client";

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { redirectByRole } from '@/lib/utils/redirectByRole';
import Image from 'next/image';

export const LoginModal = () => {
  const { isLoginOpen, setLoginOpen, setSignupOpen } = useModal();
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = await login(email);
    if (!success) {
      setError('Invalid email');
      return;
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setLoginOpen(false);
    redirectByRole(user, router);
  };

  if (!isLoginOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] max-w-md">
        <div className="flex flex-col items-center">
          <Image
            src="/scriddd_webapp_logo.webp"
            alt="Scriddd Logo"
            width={40}
            height={40}
            className="mb-3"
          />
          <h2 className="text-xl font-semibold mb-4">Login to Scriddd</h2>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 mb-3 border rounded"
            required
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded mt-2"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{' '}
          <button
            className="text-blue-500 underline"
            onClick={() => {
              setLoginOpen(false);
              setSignupOpen(true);
            }}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};