'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect } from 'react';

import { useProductsStore } from '@/entities/product/model';

import styles from './ProductList.module.scss';

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
          <Image
            src={product.thumbnail}
            width={200}
            height={200}
            alt={product.title}
            className={styles.image}
          />
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
