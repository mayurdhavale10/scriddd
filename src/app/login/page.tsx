'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { redirectByRole } from '@/lib/utils/redirectByRole';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email);
    if (!success) {
      setError('Invalid email. Please try again.');
      return;
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    redirectByRole(user, router);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md space-y-6 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center">Log in to Scrid</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded p-2"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
        >
          Log In
        </button>
      </form>
    </main>
  );
}
