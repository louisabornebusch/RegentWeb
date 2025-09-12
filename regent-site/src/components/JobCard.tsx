'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    summary: string;
    tech: string[];
    location: string;
    startDate: string;
    workloadPercent: number;
  };
}

export function JobCard({ job }: JobCardProps) {
  const t = useTranslations('assignments');

  return (
    <Card data-testid="job-card" className="group hover:shadow-lg transition-all duration-300 border-regent-gray-200 hover:border-regent-blue/20 h-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-regent-gray-900 group-hover:text-regent-blue transition-colors">
            {job.title}
          </h3>
          <Badge variant="outline" className="text-regent-blue border-regent-blue">
            {job.workloadPercent}%
          </Badge>
        </div>
        
        <p className="text-regent-gray-600 mb-4 line-clamp-3">
          {job.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.tech.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {job.tech.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{job.tech.length - 3} mer
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm text-regent-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{job.startDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{job.workloadPercent}%</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button className="w-full group-hover:bg-regent-blue group-hover:text-white transition-colors">
          {t('view')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
