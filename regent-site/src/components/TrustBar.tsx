'use client';

import { Badge } from '@/components/ui/badge';
import { Shield, Award, Leaf, Lock } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function TrustBar() {
  const t = useTranslations('trust');

  return (
    <div className="bg-regent-gray-50 border-b border-regent-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-regent-blue" />
            <Badge variant="outline" className="border-regent-blue text-regent-blue">
              {t('iso9001')}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-green-600" />
            <Badge variant="outline" className="border-green-600 text-green-600">
              {t('iso14001')}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-purple-600" />
            <Badge variant="outline" className="border-purple-600 text-purple-600">
              {t('iso27001')}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-amber-600" />
            <Badge variant="outline" className="border-amber-600 text-amber-600">
              {t('greatPlace')}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
