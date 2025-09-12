'use client';

import { useState } from 'react';
import { JobCard } from '@/components/JobCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import jobsData from '@/content/uppdrag/index.json';

export default function AssignmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [selectedStartDate, setSelectedStartDate] = useState('all');

  const allLocations = Array.from(new Set(jobsData.map(job => job.location)));
  const allTech = Array.from(new Set(jobsData.flatMap(job => job.tech)));
  const allStartDates = Array.from(new Set(jobsData.map(job => job.startDate)));

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesTech = selectedTech === 'all' || job.tech.includes(selectedTech);
    const matchesStartDate = selectedStartDate === 'all' || job.startDate === selectedStartDate;
    return matchesSearch && matchesLocation && matchesTech && matchesStartDate;
  });

  const hasActiveFilters = searchTerm || selectedLocation !== 'all' || selectedTech !== 'all' || selectedStartDate !== 'all';

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-regent-gray-900 mb-8">Våra uppdrag</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Input
          type="text"
          placeholder="Sök efter uppdrag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:col-span-2"
        />
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Välj ort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alla orter</SelectItem>
            {allLocations.map(location => (
              <SelectItem key={location} value={location}>{location}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedTech} onValueChange={setSelectedTech}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Välj teknik" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alla teknologier</SelectItem>
            {allTech.map(tech => (
              <SelectItem key={tech} value={tech}>{tech}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedStartDate} onValueChange={setSelectedStartDate}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Välj startdatum" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alla startdatum</SelectItem>
            {allStartDates.map(date => (
              <SelectItem key={date} value={date}>{date}</SelectItem>
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
              Ort: {selectedLocation}
              <button onClick={() => setSelectedLocation('all')}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {selectedTech !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Teknik: {selectedTech}
              <button onClick={() => setSelectedTech('all')}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {selectedStartDate !== 'all' && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Startdatum: {selectedStartDate}
              <button onClick={() => setSelectedStartDate('all')}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          <Button variant="ghost" onClick={() => {
            setSearchTerm('');
            setSelectedLocation('all');
            setSelectedTech('all');
            setSelectedStartDate('all');
          }} className="text-regent-blue hover:bg-regent-blue/10">
            Rensa alla filter
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p className="col-span-full text-center text-regent-gray-600">
            Inga uppdrag hittades med de valda filtren.
          </p>
        )}
      </div>
    </div>
  );
}