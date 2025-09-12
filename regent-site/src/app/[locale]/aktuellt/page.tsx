import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

// Mock news data
const newsData = [
  {
    id: '1',
    title: 'Regent certifierat enligt ISO 27001',
    excerpt: 'Vi är stolta över att meddela att Regent nu är certifierat enligt ISO 27001 för informationssäkerhet.',
    date: '2024-01-15',
    tags: ['Certifiering', 'Säkerhet'],
    readTime: '3 min läsning'
  },
  {
    id: '2',
    title: 'Nya AI-projekt med stora klienter',
    excerpt: 'Regent har inlett spännande AI-projekt med flera stora klienter inom finans- och retailsektorn.',
    date: '2024-01-10',
    tags: ['AI', 'Projekt'],
    readTime: '5 min läsning'
  },
  {
    id: '3',
    title: 'Great Place to Work 2024',
    excerpt: 'Regent har återigen utsetts till ett av Sveriges bästa arbetsplatser enligt Great Place to Work.',
    date: '2024-01-05',
    tags: ['Arbetsplats', 'Utmärkelse'],
    readTime: '4 min läsning'
  },
];

export default function NewsPage() {
  const t = useTranslations('nav');

  return (
    <div className="min-h-screen bg-regent-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-regent-gray-200">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-regent-gray-900 mb-4">
            {t('news')}
          </h1>
          <p className="text-xl text-regent-gray-600 max-w-3xl">
            Håll dig uppdaterad med de senaste nyheterna från Regent och IT-branschen
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Article */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-regent-blue to-regent-blue-dark"></div>
              </div>
              <div className="md:w-1/2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-regent-blue text-white">Senaste</Badge>
                    <div className="flex items-center gap-1 text-sm text-regent-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{newsData[0].date}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-regent-gray-900 mb-4">
                    {newsData[0].title}
                  </h2>
                  <p className="text-regent-gray-600 mb-6">
                    {newsData[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-regent-gray-400" />
                      <span className="text-sm text-regent-gray-500">{newsData[0].readTime}</span>
                    </div>
                    <Button>
                      Läs mer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.slice(1).map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-sm text-regent-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-regent-gray-500">
                    <Tag className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-regent-gray-900 mb-2">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-regent-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Läs mer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
