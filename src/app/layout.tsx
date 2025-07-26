import type { ReactNode } from 'react';
import { AuthProvider } from '@/shared/lib/SessionProvider';
import { Footer } from '@/widgets/Footer/Footer';
import { Topbar } from '@/widgets/Topbar/Topbar';
import { ShopHeader } from '@/widgets/ShopHeader/ShopHeader';
import { Navbar } from '@/widgets/Navbar/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
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
