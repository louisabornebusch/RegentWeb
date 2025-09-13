import { Briefcase, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CareersPage() {
  const jobOpenings = [
    {
      title: 'Senior Systemutvecklare',
      location: 'Stockholm',
      type: 'Heltid',
      description: 'Vi söker en erfaren systemutvecklare som vill arbeta med moderna teknologier och agila metoder.',
      requirements: ['5+ års erfarenhet', 'React/Node.js', 'Agila metoder'],
    },
    {
      title: 'Cybersäkerhetsexpert',
      location: 'Göteborg',
      type: 'Heltid',
      description: 'Sök dig till vårt cybersäkerhetsteam och hjälp våra kunder att skydda sina system.',
      requirements: ['Säkerhetscertifieringar', 'Penetrationstestning', 'Riskanalys'],
    },
    {
      title: 'Cloud Architect',
      location: 'Malmö',
      type: 'Heltid',
      description: 'Vi behöver en cloud architect som kan designa och implementera molnlösningar.',
      requirements: ['AWS/Azure', 'Kubernetes', 'DevOps'],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Flexibelt arbete',
      description: 'Möjlighet till distansarbete och flexibla arbetstider',
    },
    {
      icon: Briefcase,
      title: 'Karriärutveckling',
      description: 'Ständig utveckling genom utbildning och konferenser',
    },
    {
      icon: MapPin,
      title: 'Roliga projekt',
      description: 'Arbeta med spännande kunder och moderna teknologier',
    },
    {
      icon: Clock,
      title: 'Work-life balance',
      description: 'Vi värdesätter balans mellan arbete och fritid',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-regent-gray-900 mb-8">Jobba hos oss</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-regent-gray-700 mb-6">
            Vill du vara en del av vårt team och arbeta med spännande IT-projekt? 
            Vi söker alltid talanger som delar våra värderingar och vill bidra till 
            att skapa IT-lösningar som verkligen gör skillnad.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-regent-gray-900 mb-8">Lediga tjänster</h2>
        <div className="grid gap-6 mb-16">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="glass-effect hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription className="mt-2">
                      <div className="flex items-center space-x-4 text-sm text-regent-gray-600">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </span>
                      </div>
                    </CardDescription>
                  </div>
                  <Button>Ansök</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-regent-gray-700 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-semibold text-regent-gray-900 mb-2">Krav:</h4>
                  <ul className="list-disc list-inside text-regent-gray-700 space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-regent-gray-900 mb-8">Varför välja Regent?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center glass-effect">
              <CardContent className="pt-6">
                <benefit.icon className="h-12 w-12 text-regent-blue mx-auto mb-4" />
                <h3 className="font-semibold text-regent-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-regent-gray-700 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-regent-gray-900 mb-4">
            Hittar du inte rätt tjänst?
          </h2>
          <p className="text-regent-gray-700 mb-6">
            Skicka in en spontanansökan så hör vi av oss när vi har något som passar dig.
          </p>
          <Button size="lg">Skicka spontanansökan</Button>
        </div>
      </div>
    </div>
  );
}