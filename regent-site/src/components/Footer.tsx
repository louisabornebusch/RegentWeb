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
            <div className="glass-contact text-sm text-regent-gray-300">
              <div className="glass-contact-item flex items-center gap-2">
                <MapPin className="h-4 w-4 text-regent-blue" />
                <span>Norr Mälarstrand 22, 112 20 Stockholm</span>
              </div>
              <div className="glass-contact-item flex items-center gap-2">
                <Mail className="h-4 w-4 text-regent-blue" />
                <a href="mailto:info@regent.se" className="hover:text-white transition-colors">
                  info@regent.se
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Snabblänkar</h3>
            <div className="glass-list text-sm">
              <div className="glass-list-item">
                <Link href="/om-oss" className="text-regent-gray-300 hover:text-white transition-colors">
                  Om oss
                </Link>
              </div>
              <div className="glass-list-item">
                <Link href="/uppdrag" className="text-regent-gray-300 hover:text-white transition-colors">
                  Uppdrag
                </Link>
              </div>
              <div className="glass-list-item">
                <Link href="/jobb" className="text-regent-gray-300 hover:text-white transition-colors">
                  Karriär
                </Link>
              </div>
              <div className="glass-list-item">
                <Link href="/kontakt" className="text-regent-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <div className="glass-list text-sm">
              <div className="glass-list-item">
                <Link href="/policy/kvalitet" className="text-regent-gray-300 hover:text-white transition-colors">
                  Kvalitetspolicy
                </Link>
              </div>
              <div className="glass-list-item">
                <Link href="/policy/miljo" className="text-regent-gray-300 hover:text-white transition-colors">
                  Miljöpolicy
                </Link>
              </div>
              <div className="glass-list-item">
                <Link href="/policy/informationssakerhet" className="text-regent-gray-300 hover:text-white transition-colors">
                  Informationssäkerhet
                </Link>
              </div>
              <div className="glass-list-item">
                <Link href="/policy/integritet" className="text-regent-gray-300 hover:text-white transition-colors">
                  Integritetspolicy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-regent-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-regent-gray-400">
              <p>&copy; 2025 Regent AB. Alla rättigheter förbehållna.</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-regent-gray-300">
              <span className="font-semibold">Följ oss:</span>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}