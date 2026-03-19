import React from 'react';
import { Car, Monitor, Wrench } from 'lucide-react';
import { Button } from '../ui/Button';
export function CoursesOverview() {
  const courses = [
  {
    title: 'Driving Courses',
    icon: <Car size={32} />,
    description:
    'Professional driving instruction for all license categories including A (Motorcycles), B (Cars), C (Light Commercial), D (Heavy Vehicles), and Tuktuk.',
    link: '/driving-courses'
  },
  {
    title: 'Computer Courses',
    icon: <Monitor size={32} />,
    description:
    'Comprehensive computer training including Microsoft Office packages, basic IT skills, and networking fundamentals for beginners to advanced users.',
    link: '/computer-courses'
  },
  {
    title: 'Additional Services',
    icon: <Wrench size={32} />,
    description:
    'First aid training, basic mechanics, printing services, branding, KRA assistance, HELB applications, eCitizen services, and more.',
    link: '/services'
  }];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-800">
            Our Courses & Services
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Build valuable skills with our comprehensive range of professional
            courses and services designed to help you succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {courses.map((course, index) =>
          <div
            key={index}
            className="flex flex-col rounded-lg bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-1">
            
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#2E8B57]/10 text-[#2E8B57]">
                {course.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="mb-6 flex-grow text-gray-600">
                {course.description}
              </p>
              <div className="mt-auto">
                <Button variant="outline" to={course.link}>
                  Learn More
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}