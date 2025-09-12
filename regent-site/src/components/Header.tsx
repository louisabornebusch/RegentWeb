'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('assignments'), href: '/uppdrag' },
    { name: t('about'), href: '/om-oss' },
    { name: t('contact'), href: '/kontakt' },
    { name: t('news'), href: '/aktuellt' },
    { name: t('careers'), href: '/jobb' },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'sv' ? 'en' : 'sv';
    window.location.href = `/${newLocale}`;
  };

  return (
    <header className="bg-white shadow-sm border-b border-regent-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-regent-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-regent-gray-900">Regent</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-regent-gray-700 hover:text-regent-blue transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{locale === 'sv' ? 'EN' : 'SV'}</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-regent-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-regent-gray-700 hover:text-regent-blue hover:bg-regent-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
