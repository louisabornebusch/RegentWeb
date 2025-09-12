'use client';

import { Hero } from '@/components/Hero';
import { ValueCard } from '@/components/ValueCard';
import { Shield, Users, TrendingUp, Code, Cloud, TestTube, Users2 } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const values = [
    {
      icon: Shield,
      title: 'Tillit',
      description: 'Vi bygger långsiktiga relationer baserade på transparens och pålitlighet. Våra klienter litar på oss att leverera resultat och hålla våra löften.',
      color: 'bg-regent-blue',
    },
    {
      icon: Users,
      title: 'Tillsammans är vi bättre',
      description: 'Samarbete och mångfald driver innovation och resultat. Vi tror på att olika perspektiv och bakgrunder skapar bättre lösningar.',
      color: 'bg-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Värdeskapande',
      description: 'Vi fokuserar på att leverera mätbara resultat som skapar verkligt värde för våra kunder. Vårt mål är att överträffa förväntningar och driva framgång.',
      color: 'bg-yellow-500',
    },
  ];

  const capabilities = [
    {
      icon: Code,
      title: 'Systemutveckling',
      description: 'Fullstack-utveckling med moderna teknologier och agila metoder för att skapa robusta och skalbara lösningar.',
    },
    {
      icon: Shield,
      title: 'Cybersäkerhet',
      description: 'Säkerhetsanalys, penetrationstestning och implementering av säkerhetslösningar för att skydda din verksamhet.',
    },
    {
      icon: Cloud,
      title: 'AI, BI & Cloud',
      description: 'Intelligenta lösningar, dataanalys och molninfrastruktur för att driva digital transformation.',
    },
    {
      icon: TestTube,
      title: 'Test & Automatisering',
      description: 'Kvalitetssäkring, testautomatisering och CI/CD-pipelines för att säkerställa leverans av hög kvalitet.',
    },
    {
      icon: Users2,
      title: 'Ledning & Styrning',
      description: 'Projektledning, tekniska arkitekter och strategisk rådgivning för att driva IT-initiativ framåt.',
    },
  ];

  return (
    <>
      <Hero />

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-regent-gray-900 mb-12">
          Varför välja Regent?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
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
      </section>

      <section className="bg-regent-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-regent-gray-900 mb-12">
            Våra kompetensområden
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <ValueCard
                key={index}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                color="bg-white"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-regent-blue py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
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