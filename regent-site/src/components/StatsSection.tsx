'use client';

import { Users, Award, TrendingUp, Clock, Code, Shield, Cloud, TestTube, Users2, Leaf, Lock } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

export function StatsSection() {

  const stats: StatItem[] = [
    {
      icon: Shield,
      value: 0,
      suffix: '',
      label: 'ISO 27001 Certifierade',
      color: 'text-yellow-500',
    },
    {
      icon: Award,
      value: 0,
      suffix: '',
      label: 'Great Place to Work',
      color: 'text-yellow-500',
    },
    {
      icon: Leaf,
      value: 0,
      suffix: '',
      label: 'Hållbar utveckling',
      color: 'text-yellow-500',
    },
    {
      icon: Lock,
      value: 0,
      suffix: '',
      label: 'Säkerhet i fokus',
      color: 'text-yellow-500',
    },
    {
      icon: Users,
      value: 100,
      suffix: '+',
      label: 'Konsulter',
      color: 'text-yellow-500',
    },
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: 'Års erfarenhet',
      color: 'text-yellow-500',
    },
    {
      icon: TrendingUp,
      value: 200,
      suffix: '+',
      label: 'Lyckade projekt',
      color: 'text-yellow-500',
    },
    {
      icon: Code,
      value: 35,
      suffix: '+',
      label: 'Systemutvecklare',
      color: 'text-yellow-500',
    },
    {
      icon: Shield,
      value: 20,
      suffix: '+',
      label: 'Cybersäkerhetsexperter',
      color: 'text-yellow-500',
    },
    {
      icon: Cloud,
      value: 15,
      suffix: '+',
      label: 'AI & Cloud-specialister',
      color: 'text-yellow-500',
    },
    {
      icon: TestTube,
      value: 15,
      suffix: '+',
      label: 'Test & QA-experter',
      color: 'text-yellow-500',
    },
    {
      icon: Users2,
      value: 10,
      suffix: '+',
      label: 'Projektledare',
      color: 'text-yellow-500',
    },
    {
      icon: TrendingUp,
      value: 50,
      suffix: '+',
      label: 'Tekniska arkitekter',
      color: 'text-yellow-500',
    },
  ];


  return (
    <section id="stats-section" className="bg-gradient-to-br from-regent-gray-800 to-regent-gray-900 py-8 overflow-hidden relative">
      {/* Glass overlay */}
      <div className="absolute inset-0 glass-overlay"></div>
      <div className="relative z-10">
        {/* Rolling animation container */}
        <div className="flex animate-roll">
          {/* First set of stats */}
          <div className="flex items-center space-x-16 px-8 flex-shrink-0">
            {stats.map((stat, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
              >
                <div className="p-3 bg-regent-gray-800 rounded-full group-hover:bg-yellow-500 transition-colors duration-300">
                  <stat.icon className={`h-6 w-6 ${stat.color} group-hover:text-regent-gray-900 transition-colors duration-300`} />
                </div>
                {stat.value > 0 ? (
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-yellow-500">
                      {stat.value}
                    </span>
                    <span className="text-xl font-bold text-yellow-500">
                      {stat.suffix}
                    </span>
                  </div>
                ) : null}
                <span className="text-regent-gray-300 text-sm font-medium whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless rolling */}
          <div className="flex items-center space-x-16 px-8 flex-shrink-0">
            {stats.map((stat, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
              >
                <div className="p-3 bg-regent-gray-800 rounded-full group-hover:bg-yellow-500 transition-colors duration-300">
                  <stat.icon className={`h-6 w-6 ${stat.color} group-hover:text-regent-gray-900 transition-colors duration-300`} />
                </div>
                {stat.value > 0 ? (
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-yellow-500">
                      {stat.value}
                    </span>
                    <span className="text-xl font-bold text-yellow-500">
                      {stat.suffix}
                    </span>
                  </div>
                ) : null}
                <span className="text-regent-gray-300 text-sm font-medium whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

