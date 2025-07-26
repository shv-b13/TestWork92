'use client';

import { useEffect } from 'react';
import { useProductsStore } from '@/entities/product/model/useProductsStore';
import { useSession } from 'next-auth/react';
import styles from './ProductList.module.scss';
import { Container } from '@/shared/ui/Container/Container';

export const ProductList = () => {
  const { products, isLoading, error, loadProducts } = useProductsStore();
  const { data: session } = useSession();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.flex}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
            {session?.user && <button>Add to cart</button>}
          </div>
        </div>
      ))}
    </div>
  );
};
