import { api } from '@/shared/api';
import { Product } from '@/shared/types/product';
import { create } from 'zustand';

type ProductsState = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  loadProducts: () => Promise<void>;
};

export const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  isLoading: false,
  error: null,

  loadProducts: async () => {
    set({ isLoading: true, error: null });

    try {
      const res = await api.get<{ products: Product[] }>('/products?limit=12');
      set({ products: res.data.products });
    } catch (err) {
      console.error('Failed to load products:', err);
      set({ error: 'Failed to load products' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
