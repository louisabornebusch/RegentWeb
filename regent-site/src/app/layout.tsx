import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipLink } from '@/components/SkipLink';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Regent - IT som det borde vara',
  description: 'Vi skapar värde genom teknisk excellens och mänsklig samhörighet. ISO-certifierad IT-konsult med fokus på systemutveckling, cybersäkerhet och AI.',
  keywords: 'IT-konsult, systemutveckling, cybersäkerhet, AI, BI, Cloud, Stockholm, Sverige',
  authors: [{ name: 'Regent AB' }],
  openGraph: {
    title: 'Regent - IT som det borde vara',
    description: 'Vi skapar värde genom teknisk excellens och mänsklig samhörighet',
    type: 'website',
    locale: 'sv_SE',
    siteName: 'Regent',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regent - IT som det borde vara',
    description: 'Vi skapar värde genom teknisk excellens och mänsklig samhörighet',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}