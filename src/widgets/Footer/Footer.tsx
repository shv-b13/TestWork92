'use client';

import { useSession } from 'next-auth/react';
import { Container } from '@/shared/ui/Container/Container';

export const Footer = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const year = new Date().getFullYear();

  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid #ccc', marginTop: 'auto' }}>
      <Container>
        © {year} {email ? `Logged as ${email}` : ''}
      </Container>
    </footer>
  );
};
