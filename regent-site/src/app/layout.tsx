import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}