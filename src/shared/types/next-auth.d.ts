import { User as AppUser } from './user';
import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: AppUser;
  }

  type User = AppUser;
}
