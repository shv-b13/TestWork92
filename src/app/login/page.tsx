'use client';

import { LoginForm } from '@/features/auth/ui/LoginForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.push('/');
  }
  return <LoginForm />;
}
