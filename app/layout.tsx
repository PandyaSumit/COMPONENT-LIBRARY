import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'ComponentLib - Beautiful Tailwind CSS Components',
  description: 'A comprehensive collection of production-ready UI components built with Tailwind CSS. Copy, paste, and customize for your projects.',
  keywords: ['tailwind css', 'components', 'ui library', 'react components', 'vue components'],
  authors: [{ name: 'ComponentLib' }],
  openGraph: {
    title: 'ComponentLib - Beautiful Tailwind CSS Components',
    description: 'A comprehensive collection of production-ready UI components built with Tailwind CSS.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
