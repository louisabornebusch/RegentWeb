import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-regent-gray-900 mb-8">Kontakta oss</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-regent-gray-900 mb-6">Få i kontakt</h2>
            <p className="text-regent-gray-700 mb-8">
              Har du frågor om våra tjänster eller vill diskutera ett projekt? 
              Vi hjälper dig gärna att hitta rätt lösning för din verksamhet.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-regent-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-regent-gray-900">E-post</h3>
                  <p className="text-regent-gray-700">info@regent.se</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-regent-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-regent-gray-900">Telefon</h3>
                  <p className="text-regent-gray-700">+46 8 123 456 78</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-regent-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-regent-gray-900">Adress</h3>
                  <p className="text-regent-gray-700">
                    Storgatan 123<br />
                    111 22 Stockholm
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-regent-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-regent-gray-900">Öppettider</h3>
                  <p className="text-regent-gray-700">
                    Mån-Fre: 08:00-17:00<br />
                    Helger: Stängt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-regent-gray-900 mb-6">Skicka meddelande</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-regent-gray-700 mb-2">
                    Förnamn
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-regent-gray-700 mb-2">
                    Efternamn
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-regent-gray-700 mb-2">
                  E-post
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-regent-gray-700 mb-2">
                  Företag
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-regent-gray-700 mb-2">
                  Ämne
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-regent-gray-700 mb-2">
                  Meddelande
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full"
                  placeholder="Berätta om ditt projekt eller frågor..."
                />
              </div>
              
              <Button type="submit" className="w-full glass-effect text-regent-gray-900 font-semibold hover:text-regent-gray-900">
                Skicka meddelande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}