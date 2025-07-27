'use client';

import { Container } from '@/shared/ui/Container/Container';
import { useSession } from 'next-auth/react';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        © {year} {email ? `Logged as ${email}` : ''}
      </Container>
    </footer>
  );
};
