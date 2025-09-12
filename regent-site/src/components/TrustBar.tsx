import { Badge } from '@/components/ui/badge';
import { Shield, Award, Leaf, Lock } from 'lucide-react';

export function TrustBar() {
  return (
    <div className="bg-regent-blue text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>ISO 27001 Certifierade</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span>Great Place to Work</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            <span>Hållbar utveckling</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span>Säkerhet i fokus</span>
          </div>
        </div>
      </div>
    </div>
  );
}