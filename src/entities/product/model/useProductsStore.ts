import { create } from 'zustand';
import { Product } from '@/shared/types/product';
import { api } from '@/shared/lib/api';

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
      set({ products: res.data.products, isLoading: false });
    } catch (err) {
      console.error('Failed to load products:', err);
      set({ error: 'Failed to load products', isLoading: false });
    }
  },
}));
