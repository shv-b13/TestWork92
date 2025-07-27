import type { ReactNode } from 'react';

import { AuthProvider } from '@/shared/providers/SessionProvider';
import { Footer } from '@/widgets/Footer';
import { Navbar } from '@/widgets/Navbar';
import { ShopHeader } from '@/widgets/ShopHeader';
import { Topbar } from '@/widgets/Topbar';

import './globals.scss';

interface RootLayoutProps {
  children?: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Topbar />
          <ShopHeader />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
