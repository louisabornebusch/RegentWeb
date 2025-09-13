import { Button } from '@/components/ui/button';
import { House, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-regent-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-regent-blue mb-4">404</h1>
          <h2 className="text-3xl font-bold text-regent-gray-900 mb-4">Sidan hittades inte</h2>
          <p className="text-xl text-regent-gray-600 mb-8 max-w-md mx-auto">
            Den sida du letar efter existerar inte eller har flyttats.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="glass-effect text-regent-gray-900 font-semibold hover:text-regent-gray-900">
            <Link href="/">
              <House className="mr-2 h-5 w-5" />
              Tillbaka till startsidan
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-effect-dark text-regent-gray-900 border-regent-gray-900/20 hover:text-regent-gray-900 hover:border-regent-gray-900/40"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Gå tillbaka
          </Button>
        </div>
      </div>
    </div>
  );
}