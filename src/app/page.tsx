'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function HomeRedirectPage() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    switch (user.role) {
      case 'factory-admin':
        router.push(`/saasmodel/factory/${user.factoryId}/dashboard`);
        break;
      case 'factory-staff':
        router.push(`/saasmodel/factory/${user.factoryId}/staff/dashboard`);
        break;
      case 'user':
        router.push('/webapp/home');
        break;
      case 'scrappal':
        router.push('/scrappal/dashboard');
        break;
      default:
        router.push('/login');
    }
  }, [user, router]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Redirecting...</p>
    </main>
  );
}
