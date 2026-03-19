import React from 'react';
import { Hero } from '../components/sections/Hero';
import { CoursesOverview } from '../components/sections/CoursesOverview';
import { QuickBookingSection } from '../components/sections/QuickBookingSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactSection } from '../components/sections/ContactSection';
export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <CoursesOverview />
      <QuickBookingSection />
      <TestimonialsSection />
      <ContactSection />
    </div>);

}