'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { LogoutButton } from '@/features/auth/ui/LogoutButton';

export const Header = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      {user ? (
        <div>
          Welcome, {user.firstName} {user.lastName} | <LogoutButton />
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </header>
  );
};
