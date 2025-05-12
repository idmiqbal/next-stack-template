import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/layout/container';
import { MobileNavbar } from '@/components/layout/mobile-navbar';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container>{children}</Container>
      </main>
      <MobileNavbar />
      <Footer />
    </div>
  );
}