import { Header } from '@/components/Header';
import { TrustBar } from '@/components/TrustBar';
import { Footer } from '@/components/Footer';
import { SkipLink } from '@/components/SkipLink';
import { notFound } from 'next/navigation';

const locales = ['sv', 'en'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SkipLink />
      <TrustBar />
      <Header />
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
