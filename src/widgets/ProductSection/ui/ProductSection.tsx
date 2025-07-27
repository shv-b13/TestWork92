import { Container } from '@/shared/ui/Container/Container';
import { ProductList } from '@/widgets/ProductList/ui/ProductList';

import styles from './ProductSection.module.scss';

export const ProductSection = () => {
  return (
    <Container>
      <h2 className={styles.title}>Latest Products</h2>
      <ProductList />
    </Container>
  );
};
