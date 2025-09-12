'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
  return (
    <Card className="h-full hover:shadow-lg transition-shadow" data-testid="job-card">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs">
            {job.workloadPercent}%
          </Badge>
          <div className="flex items-center text-sm text-regent-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            {job.startDate}
          </div>
        </div>
        <CardTitle className="text-lg">{job.title}</CardTitle>
        <CardDescription className="text-sm text-regent-gray-600">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {job.location}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        <p className="text-regent-gray-700 text-sm mb-4 flex-grow">
          {job.summary}
        </p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {job.tech.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <Button className="w-full" size="sm">
          Läs mer
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}