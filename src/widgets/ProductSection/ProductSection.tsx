import { ProductList } from '@/widgets/ProductList/ProductList';
import styles from './ProductSection.module.scss';
import { Container } from '@/shared/ui/Container/Container';

export const ProductSection = () => {
  return (
    <Container>
      <h2 className={styles.title}>Latest Products</h2>
      <ProductList />
    </Container>
  );
};
