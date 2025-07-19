'use client';

import { User } from '@/services/authService';
import { useRouter } from 'next/navigation';

export function redirectByRole(user: User, router: ReturnType<typeof useRouter>) {
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
      router.push('/login'); // fallback
  }
}
