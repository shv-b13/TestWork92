'use client';

import { LoginForm } from '@/features/auth/ui/LoginForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const { data: session } = useSession();

  // redirect to homepage if user already logged in
  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  return <LoginForm />;
}
