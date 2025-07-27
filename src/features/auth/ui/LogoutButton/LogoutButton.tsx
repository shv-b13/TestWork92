import { signOut } from 'next-auth/react';

import styles from './LogoutButton.module.scss';

export const LogoutButton = () => {
  return (
    <button className={styles.logout} onClick={() => signOut({ callbackUrl: '/login' })}>
      Logout
    </button>
  );
};
