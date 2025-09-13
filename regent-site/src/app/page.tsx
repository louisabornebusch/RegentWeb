'use client';

import { Hero } from '@/components/Hero';
import { ValueCard } from '@/components/ValueCard';
import { CapabilityCard } from '@/components/CapabilityCard';
import { StatsSection } from '@/components/StatsSection';
import { ImageSection } from '@/components/ImageSection';
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
      description: 'Regent säkerställer att du som kund får en smidig lösning av högsta kvalitet med snabbaste time to market. Vi har hjälpt våra kunder med allt från e-handel och mobilappar till stora integrationsprojekt.',
      technologies: ['Frontend: Javascript, React', 'Mobilt: React Native, Swift, Kotlin', 'Backend: Node.js, Java, .Net', 'Arkitektur & Integrationer', 'Cloud: Azure, AWS', 'Databaser: SQL, NoSQL']
    },
    {
      icon: Shield,
      title: 'Cybersäkerhet',
      description: 'Regent ser det som vårt uppdrag att öka samhällets digitala skyddsförmåga. Vi gör detta genom att erbjuda experter inom informationssäkerhet och säkerhetsorienterade tekniska tjänster.',
      technologies: ['Informationssäkerhet, ISO-27001', 'Risk & sårbarhetsanalyser', 'Compliance, GDPR, NIS2, DORA', 'DevSecOps', 'Cloud säkerhet', 'IT-säkerhetsexperter']
    },
    {
      icon: Cloud,
      title: 'AI, BI & Cloud',
      description: 'Regent sticker ut med konsulter som hör till toppskiktet i världen inom AI och Machine Learning. Hand i hand med AI har vi många konsulter inom BI och beslutsstöd.',
      technologies: ['AI/Generativ AI', 'Machine Learning/Deep Learning', 'Natural Language Processing, NLP', 'AWS/Azure/GCP', 'PowerBI/Tableau', 'Data Bricks']
    },
    {
      icon: TestTube,
      title: 'Test & Automatisering',
      description: 'Regent brinner för test, automatisering och pipelines. Så till den grad att vi har ett eget affärsområde där vi fokuserat hjälper våra kunder med detta.',
      technologies: ['Testautomatiserare', 'DevOps', 'Testledare', 'Manuella testare', 'Tekniska testare', 'Utvecklingsnära']
    },
    {
      icon: Users2,
      title: 'Ledning & Styrning',
      description: 'För att säkerställa en god leverans krävs struktur och goda processer. Våra konsulter inom dessa roller är experter på att få utvecklingsteam och hela organisationer att fungera så som de borde göra.',
      technologies: ['Engineering Managers', 'Projektledare', 'Produktägare', 'Arkitekter', 'Kravanalytiker', 'Agila Coacher']
    },
  ];

  return (
    <>
      <Hero />

      <StatsSection />

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
              <CapabilityCard
                key={index}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                technologies={capability.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      <ImageSection />

      {/* Advantages Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-regent-gray-900 mb-4">
            Fördelar med Regent som IT-konsultbolag
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-regent-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-regent-gray-900 mb-3">Nöjda kunder</h3>
            <p className="text-regent-gray-600">
              Kundnöjdhet är viktigare för oss än kortsiktiga vinster
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-regent-gray-900 mb-3">Kvalitet, Miljö & Informationssäkerhet</h3>
            <p className="text-regent-gray-600">
              Certifierade inom kvalitet, miljö & informationssäkerhet<br />
              ISO 9001, 14001 & 27001
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-regent-gray-900 mb-3">Nöjda medarbetare</h3>
            <p className="text-regent-gray-600">
              Glada och inspirerade medarbetare
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: '#3795be', color: '#0f172a' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#0f172a' }}>
            Vill du veta mer om oss, hör gärna av dig till mig:
          </h2>
          <div className="mb-8">
            <a 
              href="mailto:info@regent.se" 
              className="text-2xl font-semibold transition-colors"
              style={{ color: '#0f172a' }}
            >
              info@regent.se
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/uppdrag"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 glass-effect text-regent-gray-900 font-semibold hover:text-regent-gray-900"
            >
              Se våra uppdrag
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 glass-effect-dark text-white border-white/20 hover:text-white hover:border-white/40"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}