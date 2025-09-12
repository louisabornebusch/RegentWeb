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
    <Card className="group hover:shadow-lg transition-all duration-300 border-regent-gray-200 hover:border-regent-blue/20">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-regent-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-regent-gray-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
