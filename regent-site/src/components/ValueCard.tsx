'use client';

import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export function ValueCard({ icon: Icon, title, description, color }: ValueCardProps) {
  return (
    <Card className="group glass-effect hover:shadow-lg transition-all duration-300 border-white/20 hover:border-white/30">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glass-effect border-2 border-regent-blue/30 shadow-xl backdrop-blur-sm`}>
          <Icon className="h-6 w-6 text-regent-blue drop-shadow-lg filter brightness-110 contrast-125" />
        </div>
        <h3 className="text-xl font-semibold text-regent-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-regent-gray-700 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
