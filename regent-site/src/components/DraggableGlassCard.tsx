'use client';

import { useState, useRef, useEffect } from 'react';

interface DraggableGlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function DraggableGlassCard({ children, className = '' }: DraggableGlassCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    setIsDragging(true);
    const rect = cardRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    // Prevent text selection while dragging
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    // Constrain to viewport bounds
    const maxX = window.innerWidth - (cardRef.current?.offsetWidth || 0);
    const maxY = window.innerHeight - (cardRef.current?.offsetHeight || 0);
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Initialize position to bottom left of hero section
  useEffect(() => {
    if (!isInitialized) {
      const heroSection = document.querySelector('section.relative.bg-gradient-to-br.from-regent-blue.to-regent-blue-dark');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const cardWidth = 320; // max-w-sm width
        const cardHeight = 200; // estimated height
        const padding = 24; // 6 * 4px = 24px padding
        
        setPosition({
          x: padding,
          y: heroRect.height - cardHeight - padding
        });
        setIsInitialized(true);
      }
    }
  }, [isInitialized]);

  // Handle scroll events to hide card
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) { // Hide after 50px of scroll
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };
  }, [isDragging, dragOffset]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={cardRef}
      className={`
        fixed z-50 cursor-grab active:cursor-grabbing
        transition-all duration-300 ease-out
        ${isDragging ? 'scale-105 shadow-2xl' : 'hover:scale-102'}
        ${className}
      `}
      style={{
        left: position.x,
        top: position.y,
        transform: isDragging ? 'rotate(2deg)' : 'rotate(0deg)',
        opacity: isVisible ? 1 : 0,
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
}
