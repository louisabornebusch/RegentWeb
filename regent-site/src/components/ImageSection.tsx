'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ImageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const teamMembers = [
    {
      id: 1,
      name: "CEO",
      role: "Ledning & Styrning",
      image: "/images/team-member-2.jpg",
      alt: "Tech Lead - Professional headshot"
    },
    {
      id: 2,
      name: "Sales",
      role: "",
      image: "/images/team-member-1.jpg",
      alt: "Senior Consultant - Professional headshot"
    },
    {
      id: 3,
      name: "Senior Consultant",
      role: "Full-stack",
      image: "/images/team-member-3.jpg",
      alt: "Project Manager - Professional headshot"
    }
  ];

  const nextMember = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMember = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Team Images */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-regent-gray-900 mb-2">
                Vårt team
              </h3>
              <p className="text-regent-gray-600">
                Kompetenta konsulter som brinner för teknik och samarbete
              </p>
            </div>
            
            {/* Individual Team Member Photos - Carousel (3 at once) */}
            <div className="relative">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-lg">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
                >
                  {teamMembers.map((member) => (
                    <div key={member.id} className="w-1/3 flex-shrink-0">
                      <div className="text-center px-2">
                        <div className="relative w-32 h-40 mx-auto mb-4">
                          <Image
                            src={member.image}
                            alt={member.alt}
                            fill
                            className="rounded-lg shadow-md object-cover"
                            priority={member.id === teamMembers[0].id}
                          />
                        </div>
                        <h4 className="font-semibold text-regent-gray-900 mb-1 text-sm">{member.name}</h4>
                        <p className="text-xs text-regent-gray-600">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevMember}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-regent-gray-900 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Previous team members"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextMember}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-regent-gray-900 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Next team members"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-regent-blue scale-125' 
                        : 'bg-regent-gray-300 hover:bg-regent-gray-400'
                    }`}
                    aria-label={`Go to team member ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-regent-gray-500">
                + 100+ andra experter inom IT
              </p>
            </div>
          </div>

          {/* Office Image */}
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-regent-gray-900 mb-2">
                Vårt kontor
              </h3>
              <p className="text-regent-gray-600">
                Modernt kontor i hjärtat av Stockholm
              </p>
            </div>

            <Image
              src="/images/office-photo.jpg"
              alt="Regent office - Modern open-plan workspace with employees"
              width={800}
              height={450}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
