'use client';

import { FormEvent } from 'react';

import { useLoginFormStore } from '@/entities/product/model';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const { username, password, error, loading, setUsername, setPassword, handleLogin } =
    useLoginFormStore();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};
