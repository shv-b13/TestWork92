import { Container } from '@/shared/ui/Container';
import Link from 'next/link';

import styles from './Navbar.module.scss';

const navItems = [
  'Home',
  'Hot Deals',
  'Categories',
  'Laptops',
  'Smartphones',
  'Cameras',
  'Accessories',
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.inner}>
          {navItems.map((item) => (
            <Link key={item} href="/">
              {item}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
};
