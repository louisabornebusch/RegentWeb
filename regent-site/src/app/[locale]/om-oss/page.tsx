import { ValueCard } from '@/components/ValueCard';
import { Shield, Users, TrendingUp, Award, Leaf, Lock } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

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
      description: 'Vi fokuserar på mätbara resultat och hållbar utveckling. Varje projekt ska skapa verkligt värde för våra klienter och samhället.',
      color: 'bg-purple-600',
    },
  ];

  const policies = [
    {
      icon: Award,
      title: 'ISO 9001 - Kvalitet',
      description: 'Vi följer internationella standarder för kvalitetsledning och kontinuerlig förbättring.',
      color: 'bg-regent-blue',
    },
    {
      icon: Leaf,
      title: 'ISO 14001 - Miljö',
      description: 'Vi arbetar aktivt för att minimera vår miljöpåverkan och främja hållbar utveckling.',
      color: 'bg-green-600',
    },
    {
      icon: Lock,
      title: 'ISO 27001 - Informationssäkerhet',
      description: 'Vi skyddar våra klienters data och system enligt höga säkerhetsstandarder.',
      color: 'bg-purple-600',
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
              Vi skapar värde genom teknisk excellens och mänsklig samhörighet
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-regent-gray-900 mb-6">
                  {t('mission')}
                </h2>
                <p className="text-lg text-regent-gray-600 leading-relaxed">
                  Vår mission är att leverera IT-lösningar som verkligen gör skillnad. 
                  Vi kombinerar djup teknisk expertis med en mänsklig approach för att 
                  skapa hållbara och skalbara lösningar som driver våra klienters framgång.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-regent-gray-900 mb-6">
                  {t('vision')}
                </h2>
                <p className="text-lg text-regent-gray-600 leading-relaxed">
                  Vi strävar efter att vara Sveriges ledande IT-konsultföretag genom 
                  att ständigt förbättra våra processer, investera i våra medarbetare 
                  och leverera exceptionella resultat som överträffar förväntningar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-regent-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-regent-gray-900 mb-4">
              {t('values')}
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

      {/* Policies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-regent-gray-900 mb-4">
              {t('policies')}
            </h2>
            <p className="text-xl text-regent-gray-600 max-w-3xl mx-auto">
              Vi följer internationella standarder och best practices för att säkerställa kvalitet, 
              miljöansvar och informationssäkerhet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy, index) => (
              <ValueCard
                key={index}
                icon={policy.icon}
                title={policy.title}
                description={policy.description}
                color={policy.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-regent-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Konsulter</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Års erfarenhet</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Projekt levererade</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Kundnöjdhet</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
