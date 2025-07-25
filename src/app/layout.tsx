import type { ReactNode } from 'react';
import { AuthProvider } from '@/shared/lib/SessionProvider';
import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main style={{ flexGrow: 1 }}>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
