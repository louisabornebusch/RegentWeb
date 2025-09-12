'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-regent-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-regent-gray-200">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-regent-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-regent-gray-600 max-w-3xl">
            Har du frågor eller vill diskutera ett projekt? Vi hör gärna från dig!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-regent-gray-900 mb-6">
              Kontaktinformation
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-regent-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-regent-gray-900 mb-2">Adress</h3>
                      <p className="text-regent-gray-600">
                        {t('address')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-regent-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-regent-gray-900 mb-2">E-post</h3>
                      <a 
                        href={`mailto:${t('email')}`}
                        className="text-regent-blue hover:text-regent-blue-dark transition-colors"
                      >
                        {t('email')}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-regent-blue mt-1" />
                    <div>
                      <h3 className="font-semibold text-regent-gray-900 mb-2">Telefon</h3>
                      <p className="text-regent-gray-600">
                        +46 8 123 456 78
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-regent-gray-900 mb-6">
              Skicka meddelande
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-regent-gray-700 mb-2">
                      {t('form.name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-regent-gray-700 mb-2">
                      {t('form.email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-regent-gray-700 mb-2">
                      {t('form.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Berätta om ditt projekt eller frågor..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    {t('form.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
