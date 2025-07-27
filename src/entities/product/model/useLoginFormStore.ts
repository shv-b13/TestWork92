import { signIn } from 'next-auth/react';
import { create } from 'zustand';

interface LoginFormState {
  username: string;
  password: string;
  error: string | null;
  loading: boolean;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: () => Promise<void>;
  resetForm: () => void;
}

const minFormInputLength = 3;

export const useLoginFormStore = create<LoginFormState>((set, get) => ({
  username: '',
  password: '',
  error: null,
  loading: false,

  setUsername: (value) => set({ username: value }),
  setPassword: (value) => set({ password: value }),

  resetForm: () =>
    set({
      username: '',
      password: '',
      error: null,
      loading: false,
    }),

  handleLogin: async () => {
    const { username, password } = get();
    set({ loading: true, error: null });

    if (username.length < minFormInputLength || password.length < minFormInputLength) {
      set({ error: `Minimum of ${minFormInputLength} characters` });
    }

    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    set({ loading: false });

    if (res?.error) {
      set({ error: 'Invalid username or password' });
    } else {
      window.location.href = '/';
    }
  },
}));
