import { Hero } from '@/components/Hero';
import { ValueCard } from '@/components/ValueCard';
import { Shield, Users, TrendingUp, Code, Cloud, TestTube, Users2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('home');

  const values = [
    {
      icon: Shield,
      title: t('values.trust.title'),
      description: t('values.trust.description'),
      color: 'bg-regent-blue',
    },
    {
      icon: Users,
      title: t('values.together.title'),
      description: t('values.together.description'),
      color: 'bg-green-600',
    },
    {
      icon: TrendingUp,
      title: t('values.value.title'),
      description: t('values.value.description'),
      color: 'bg-purple-600',
    },
  ];

  const capabilities = [
    {
      icon: Code,
      title: t('capabilities.development'),
      description: 'Modern systemutveckling med agila metoder och best practices',
    },
    {
      icon: Shield,
      title: t('capabilities.security'),
      description: 'Cybersäkerhet och informationssäkerhet enligt ISO 27001',
    },
    {
      icon: Cloud,
      title: t('capabilities.ai'),
      description: 'AI, BI och Cloud-lösningar för framtidens verksamheter',
    },
    {
      icon: TestTube,
      title: t('capabilities.testing'),
      description: 'Test och automatisering för högkvalitativa leveranser',
    },
    {
      icon: Users2,
      title: t('capabilities.management'),
      description: 'Ledning och styrning av IT-projekt och transformationer',
    },
  ];

  return (
    <>
      <Hero />
      
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-regent-gray-900 mb-4">
              Våra värderingar
            </h2>
            <p className="text-xl text-regent-gray-600 max-w-3xl mx-auto">
              Våra värderingar är grunden för allt vi gör och driver oss att leverera exceptionella resultat
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                color={value.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-regent-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-regent-gray-900 mb-4">
              {t('capabilities.title')}
            </h2>
            <p className="text-xl text-regent-gray-600 max-w-3xl mx-auto">
              Vi kombinerar djup teknisk expertis med affärsförståelse för att skapa hållbara lösningar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <ValueCard
                key={index}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                color="bg-regent-blue"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-regent-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redo att börja din resa med oss?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Låt oss tillsammans skapa IT-lösningar som verkligen gör skillnad för din verksamhet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/uppdrag"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-regent-blue font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Se våra uppdrag
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-regent-blue transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
