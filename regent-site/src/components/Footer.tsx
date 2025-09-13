import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-regent-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img 
                src="/regent-logo.png" 
                alt="Regent" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-regent-gray-300 mb-4 max-w-md">
              Vi skapar värde genom teknisk excellens och mänsklig samhörighet. 
              ISO-certifierad IT-konsult med fokus på hållbara lösningar.
            </p>
            <div className="space-y-2 text-sm text-regent-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Storgatan 123, 111 22 Stockholm</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@regent.se" className="hover:text-white transition-colors">
                  info@regent.se
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/om-oss" className="text-regent-gray-300 hover:text-white transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/uppdrag" className="text-regent-gray-300 hover:text-white transition-colors">
                  Uppdrag
                </Link>
              </li>
              <li>
                <Link href="/jobb" className="text-regent-gray-300 hover:text-white transition-colors">
                  Karriär
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-regent-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/policy/kvalitet" className="text-regent-gray-300 hover:text-white transition-colors">
                  Kvalitetspolicy
                </Link>
              </li>
              <li>
                <Link href="/policy/miljo" className="text-regent-gray-300 hover:text-white transition-colors">
                  Miljöpolicy
                </Link>
              </li>
              <li>
                <Link href="/policy/informationssakerhet" className="text-regent-gray-300 hover:text-white transition-colors">
                  Informationssäkerhet
                </Link>
              </li>
              <li>
                <Link href="/policy/integritet" className="text-regent-gray-300 hover:text-white transition-colors">
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-regent-gray-700 mt-8 pt-8 text-center text-sm text-regent-gray-400">
          <p>&copy; 2024 Regent AB. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}