import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ModernShop - Your Premium E-Commerce Destination',
  description: 'Discover premium products across electronics, fashion, home & living, and sports. Shop with confidence with fast shipping and excellent customer service.',
  keywords: 'e-commerce, online shopping, electronics, fashion, home decor, sports equipment',
  authors: [{ name: 'ModernShop Team' }],
  creator: 'ModernShop',
  publisher: 'ModernShop',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://modernshop.com',
    title: 'ModernShop - Your Premium E-Commerce Destination',
    description: 'Discover premium products across electronics, fashion, home & living, and sports.',
    siteName: 'ModernShop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModernShop - Your Premium E-Commerce Destination',
    description: 'Discover premium products across electronics, fashion, home & living, and sports.',
    creator: '@modernshop',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}