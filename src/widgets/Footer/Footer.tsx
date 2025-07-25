'use client';

import { useSession } from 'next-auth/react';

export const Footer = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const year = new Date().getFullYear();

  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid #ccc', marginTop: 'auto' }}>
      <div>
        © {year} {email ? `Logged as ${email}` : ''}
      </div>
    </footer>
  );
};
