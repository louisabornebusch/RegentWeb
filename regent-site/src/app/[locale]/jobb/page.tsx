import { ValueCard } from '@/components/ValueCard';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { Users, Heart, Award, Coffee, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const t = useTranslations('careers');

  const benefits = [
    {
      icon: Users,
      title: 'Kollegial miljö',
      description: 'Arbeta med branschens bästa experter i en stödjande och inkluderande kultur.',
      color: 'bg-regent-blue',
    },
    {
      icon: Heart,
      title: 'Work-life balance',
      description: 'Flexibla arbetstider och möjlighet till distansarbete för att balansera jobb och privatliv.',
      color: 'bg-green-600',
    },
    {
      icon: Award,
      title: 'Karriärutveckling',
      description: 'Kontinuerlig utbildning, certifieringar och möjligheter att växa inom företaget.',
      color: 'bg-purple-600',
    },
    {
      icon: Coffee,
      title: 'Förmåner',
      description: 'Konkurrenskraftig lön, friskvård, pension och andra förmåner som gör skillnad.',
      color: 'bg-amber-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-regent-blue to-regent-blue-dark text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-regent-blue hover:bg-blue-50">
                {t('apply')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Regent Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-regent-gray-900 mb-4">
              Varför välja Regent?
            </h2>
            <p className="text-xl text-regent-gray-600 max-w-3xl mx-auto">
              Vi erbjuder mer än bara jobb - vi erbjuder en karriär där du kan växa, 
              utvecklas och göra skillnad tillsammans med likasinnade kollegor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <ValueCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                color={benefit.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-regent-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redo att bli en del av vårt team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Skicka in ditt CV och berätta för oss varför du vill arbeta hos Regent. 
            Vi ser fram emot att höra från dig!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-regent-blue hover:bg-blue-50">
              Skicka ansökan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-regent-blue">
              Kontakta oss
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
