'use client';

import { useState, useMemo } from 'react';
import { JobCard } from '@/components/JobCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import { Search, Filter, X } from 'lucide-react';
import jobsData from '@/content/uppdrag/index.json';

export default function AssignmentsPage() {
  const t = useTranslations('assignments');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [selectedWorkload, setSelectedWorkload] = useState('all');

  // Get unique values for filters
  const locations = useMemo(() => {
    const unique = [...new Set(jobsData.map(job => job.location))];
    return unique.sort();
  }, []);

  const technologies = useMemo(() => {
    const allTech = jobsData.flatMap(job => job.tech);
    const unique = [...new Set(allTech)];
    return unique.sort();
  }, []);

  const workloads = ['all', '50%', '80%', '100%'];

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
      const matchesTech = selectedTech === 'all' || job.tech.includes(selectedTech);
      const matchesWorkload = selectedWorkload === 'all' || 
                             (selectedWorkload === '50%' && job.workloadPercent === 50) ||
                             (selectedWorkload === '80%' && job.workloadPercent === 80) ||
                             (selectedWorkload === '100%' && job.workloadPercent === 100);

      return matchesSearch && matchesLocation && matchesTech && matchesWorkload;
    });
  }, [searchTerm, selectedLocation, selectedTech, selectedWorkload]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedLocation('all');
    setSelectedTech('all');
    setSelectedWorkload('all');
  };

  const hasActiveFilters = searchTerm || selectedLocation !== 'all' || selectedTech !== 'all' || selectedWorkload !== 'all';

  return (
    <div className="min-h-screen bg-regent-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-regent-gray-200">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-regent-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-regent-gray-600 max-w-3xl">
            Hitta ditt nästa spännande uppdrag inom IT. Vi har samlat de bästa möjligheterna 
            från våra partners och klienter.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-regent-gray-200 p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-regent-gray-600" />
            <h2 className="text-lg font-semibold text-regent-gray-900">Filtrera uppdrag</h2>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-auto flex items-center gap-1 text-sm text-regent-blue hover:text-regent-blue-dark"
              >
                <X className="h-4 w-4" />
                Rensa filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-regent-gray-400" />
              <Input
                placeholder={t('search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Location */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Plats" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alla platser</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Technology */}
            <Select value={selectedTech} onValueChange={setSelectedTech}>
              <SelectTrigger>
                <SelectValue placeholder="Teknologi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alla teknologier</SelectItem>
                {technologies.map(tech => (
                  <SelectItem key={tech} value={tech}>
                    {tech}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Workload */}
            <Select value={selectedWorkload} onValueChange={setSelectedWorkload}>
              <SelectTrigger>
                <SelectValue placeholder="Arbetstid" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alla arbetstider</SelectItem>
                {workloads.slice(1).map(workload => (
                  <SelectItem key={workload} value={workload}>
                    {workload}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Active filters display */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Sök: &quot;{searchTerm}&quot;
                  <button onClick={() => setSearchTerm('')}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {selectedLocation !== 'all' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Plats: {selectedLocation}
                  <button onClick={() => setSelectedLocation('all')}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {selectedTech !== 'all' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Tech: {selectedTech}
                  <button onClick={() => setSelectedTech('all')}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {selectedWorkload !== 'all' && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Arbetstid: {selectedWorkload}
                  <button onClick={() => setSelectedWorkload('all')}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-regent-gray-600">
            {filteredJobs.length} uppdrag hittades
          </p>
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-regent-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-regent-gray-900 mb-2">
              {t('noResults')}
            </h3>
            <p className="text-regent-gray-600 mb-4">
              Prova att justera dina sökfilter eller kontakta oss för fler möjligheter.
            </p>
            <button
              onClick={clearFilters}
              className="text-regent-blue hover:text-regent-blue-dark font-medium"
            >
              Rensa alla filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
