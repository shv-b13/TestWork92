'use client';

import { useSession } from 'next-auth/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Topbar.module.scss';
import { LogoutButton } from '@/features/auth/ui/LogoutButton';
import { Container } from '@/shared/ui/Container/Container';

export const Topbar = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className={styles.topbar}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            <FaPhone /> <span>+021-95-51-84</span>
            <FaEnvelope /> <span>shop@abelohost.com</span>
            <FaMapMarkerAlt /> <span>1734 Stonecoal Road</span>
          </div>
          <div className={styles.right}>
            {user ? (
              <>
                <span>
                  Welcome, {user.firstName} {user.lastName}
                </span>
                <LogoutButton />
              </>
            ) : (
              <Link href="/login">
                <FaUser /> Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
