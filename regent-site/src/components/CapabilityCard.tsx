import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
}

export function CapabilityCard({ icon: Icon, title, description, technologies }: CapabilityCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-regent-blue rounded-lg">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <p className="text-regent-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="font-semibold text-regent-gray-900 text-sm">Våra kompetenser:</h4>
          <div className="glass-tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-tech-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
