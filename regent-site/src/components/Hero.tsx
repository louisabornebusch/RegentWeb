'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-regent-blue to-regent-blue-dark text-regent-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            IT som det borde vara
          </h1>
          <p className="text-xl md:text-2xl text-regent-gray-900 mb-8 max-w-3xl mx-auto leading-relaxed">
            Vi skapar värde genom teknisk excellens och mänsklig samhörighet
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/uppdrag">
              <Button size="lg" className="glass-effect text-regent-gray-900 font-semibold hover:text-regent-gray-900">
                Utforska våra uppdrag
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/om-oss">
              <Button size="lg" variant="outline" className="glass-effect-dark text-white border-white/20 hover:text-white hover:border-white/40">
                Läs mer om oss
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-regent-gray-900">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">100+ konsulter</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">ISO-certifierade</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm">15+ års erfarenhet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}