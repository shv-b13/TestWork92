import { signIn } from 'next-auth/react';
import { create } from 'zustand';

interface LoginFormState {
  username: string;
  password: string;
  error: string | null;
  loading: boolean;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: () => Promise<boolean>;
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

    if (username.length < minFormInputLength || password.length < minFormInputLength) {
      set({ error: `Минимум ${minFormInputLength} символа`, loading: false });
      return false;
    }

    set({ loading: true, error: null });

    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (res?.error) {
      set({ error: 'Неверное имя пользователя или пароль', loading: false });
      return false;
    }

    return true;
  },
}));
