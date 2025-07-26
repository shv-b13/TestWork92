import styles from './ShopHeader.module.scss';
import { Container } from '@/shared/ui/Container/Container';

export const ShopHeader = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <h1 className={styles.logo}>Abelohost Shop.</h1>
          <div className={styles.banner}>600 x 70</div>
        </div>
      </Container>
    </div>
  );
};
