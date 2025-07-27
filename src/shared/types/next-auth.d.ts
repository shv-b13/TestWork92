import 'next-auth';
import { User as AppUser } from './user';

declare module 'next-auth' {
  interface Session {
    user: AppUser;
  }

  type User = AppUser;
}
