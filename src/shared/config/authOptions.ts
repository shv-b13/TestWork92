import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { User } from '@/shared/types/user';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const res = await axios.post('https://dummyjson.com/auth/login', {
            username: credentials.username,
            password: credentials.password,
          });

          const user: User = res.data;

          if (user && user.token) {
            return user;
          }

          return null;
        } catch (err) {
          console.error('Login failed', err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as User;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: 'my-secret', // на проде бы сделал в .env.local
};