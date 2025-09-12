import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewsPage() {
  const news = [
    {
      title: 'Regent utökar sitt cybersäkerhetsteam',
      date: '2024-01-15',
      author: 'Anna Andersson',
      excerpt: 'Vi är glada att meddela att vi utökar vårt cybersäkerhetsteam med tre nya experter som kommer att stärka vår kapacitet inom informationssäkerhet.',
      category: 'Nyheter',
    },
    {
      title: 'Nya ISO 27001 certifiering',
      date: '2024-01-10',
      author: 'Erik Eriksson',
      excerpt: 'Regent har erhållit ISO 27001 certifiering, vilket bekräftar vår höga standard inom informationssäkerhet och kvalitetssäkring.',
      category: 'Certifieringar',
    },
    {
      title: 'Framgångsrikt projekt med storbank',
      date: '2024-01-05',
      author: 'Maria Svensson',
      excerpt: 'Vi har slutfört ett omfattande digitaliseringsprojekt för en av Sveriges största banker, vilket resulterade i förbättrad effektivitet och säkerhet.',
      category: 'Projekt',
    },
    {
      title: 'Regent sponsrar Tech Conference 2024',
      date: '2024-01-01',
      author: 'Lars Larsson',
      excerpt: 'Vi är stolta att vara huvudsponsor för Tech Conference 2024, en av Nordens största IT-konferenser som fokuserar på framtidens teknologier.',
      category: 'Event',
    },
  ];

  const categories = ['Alla', 'Nyheter', 'Certifieringar', 'Projekt', 'Event'];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-regent-gray-900 mb-8">Aktuellt</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-regent-gray-700">
            Håll dig uppdaterad med de senaste nyheterna från Regent. Vi delar regelbundet 
            information om våra projekt, certifieringar, teamutökningar och andra viktiga händelser.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'Alla' ? 'default' : 'outline'}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid gap-8">
          {news.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block bg-regent-blue text-white text-xs px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-regent-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('sv-SE')}
                  </div>
                </div>
                <CardTitle className="text-2xl">{article.title}</CardTitle>
                <CardDescription className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-1" />
                  {article.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-regent-gray-700 mb-4">{article.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto text-regent-blue hover:text-regent-blue-dark">
                  Läs mer
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-regent-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-regent-gray-900 mb-4">
            Prenumerera på vårt nyhetsbrev
          </h2>
          <p className="text-regent-gray-700 mb-6">
            Få de senaste nyheterna och insikterna från Regent direkt i din inkorg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Din e-postadress"
              className="flex-1 px-4 py-2 border border-regent-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-regent-blue"
            />
            <Button>Prenumerera</Button>
          </div>
        </div>
      </div>
    </div>
  );
}