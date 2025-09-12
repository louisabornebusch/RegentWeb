'use client';

import { TrustBar } from '@/components/TrustBar';
import { ValueCard } from '@/components/ValueCard';
import { Shield, Users, TrendingUp, Award, Leaf, Lock } from 'lucide-react';

export default function AboutPage() {
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

  const achievements = [
    {
      icon: Award,
      title: 'ISO 27001 Certifierade',
      description: 'Vi följer internationella standarder för informationssäkerhet och kvalitetssäkring.',
    },
    {
      icon: Users,
      title: '100+ Konsulter',
      description: 'En skicklig och erfaren team av IT-experter som täcker alla aspekter av modern IT.',
    },
    {
      icon: TrendingUp,
      title: '15+ Års Erfarenhet',
      description: 'Lång erfarenhet av att leverera IT-lösningar inom olika branscher och verksamhetsområden.',
    },
    {
      icon: Leaf,
      title: 'Hållbar Utveckling',
      description: 'Vi arbetar med hållbara IT-lösningar som minskar miljöpåverkan och främjar digital transformation.',
    },
    {
      icon: Lock,
      title: 'Säkerhet i Fokus',
      description: 'Cybersäkerhet är en av våra kärnkompetenser och vi hjälper våra kunder att skydda sina system.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-regent-gray-900 mb-8">Om Regent</h1>
        
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-regent-gray-700 mb-6">
            Regent är en ledande IT-konsultfirma som specialiserar sig på att leverera tekniska lösningar 
            som verkligen gör skillnad. Sedan vår grundande har vi arbetat med att skapa värde genom 
            teknisk excellens och mänsklig samhörighet.
          </p>
          
          <p className="text-regent-gray-700 mb-6">
            Vårt team består av över 100 erfarna konsulter som täcker alla aspekter av modern IT, 
            från systemutveckling och cybersäkerhet till AI, BI och molnlösningar. Vi tror på att 
            den bästa tekniken kommer från människor som arbetar tillsammans med gemensamma mål.
          </p>
          
          <p className="text-regent-gray-700">
            Våra kunder litar på oss för att leverera resultat som överträffar förväntningar. 
            Vi är stolta över att vara ISO 27001-certifierade och att ha byggt långsiktiga 
            relationer med företag i alla storlekar och branscher.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-regent-gray-900 mb-8 text-center">Våra värderingar</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        <h2 className="text-3xl font-bold text-regent-gray-900 mb-8 text-center">Våra prestationer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <ValueCard
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              color="bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}