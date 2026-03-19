import React from 'react';
import { CourseCard } from '../components/ui/CourseCard';
import { Button } from '../components/ui/Button';
import { Phone } from 'lucide-react';
export function ComputerCourses() {
  const courses = [
  {
    title: 'Microsoft Office Suite',
    category: 'Computer',
    description:
    'Comprehensive training on Word, Excel, PowerPoint, and Outlook for professional document creation and data management.',
    duration: '4 weeks',
    prerequisites: 'Basic computer knowledge',
    imageUrl:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Basic IT & Networking',
    category: 'Computer',
    description:
    'Introduction to computer hardware, software, operating systems, and basic network configuration and troubleshooting.',
    duration: '6 weeks',
    prerequisites: 'None',
    imageUrl:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'First Aid Training',
    category: 'Special',
    description:
    'Essential first aid skills including CPR, wound care, and emergency response procedures for various situations.',
    duration: '2 weeks',
    prerequisites: 'None',
    imageUrl:
    'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Basic Mechanics',
    category: 'Special',
    description:
    'Fundamentals of vehicle mechanics including basic maintenance, troubleshooting, and emergency repairs.',
    duration: '3 weeks',
    prerequisites: 'None',
    imageUrl:
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-[#1E90FF] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Computer Courses
          </h1>
          <p className="mx-auto max-w-2xl text-lg">
            Gain essential computer skills with our practical, hands-on courses
            taught by experienced instructors in a supportive environment.
          </p>
        </div>
      </div>
      {/* Overview Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Course Overview
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Our computer training programs are designed to provide
                practical, job-ready skills for today's digital workplace.
                Whether you're a complete beginner or looking to enhance your
                existing skills, our courses offer:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Hands-on practice with real-world applications</li>
                <li>Small class sizes for personalized attention</li>
                <li>Flexible scheduling options</li>
                <li>Certificates upon successful completion</li>
                <li>Career guidance and practical application tips</li>
              </ul>
              <p>
                We also offer specialized courses in First Aid and Basic
                Mechanics to complement your skill set.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button variant="primary" to="/register">
                Register Now
              </Button>
              <Button variant="outline" to="/contact">
                Contact for Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Course List Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Available Computer & Special Courses
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {courses.map((course, index) =>
            <CourseCard
              key={index}
              title={course.title}
              category={course.category}
              description={course.description}
              duration={course.duration}
              prerequisites={course.prerequisites}
              imageUrl={course.imageUrl} />

            )}
          </div>
        </div>
      </section>
      {/* Learning Outcomes Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Learning Outcomes
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-[#1E90FF]">
                Microsoft Office Suite
              </h3>
              <ul className="ml-6 list-disc space-y-2 text-gray-600">
                <li>
                  Create professional documents, reports, and newsletters using
                  Word
                </li>
                <li>
                  Build spreadsheets with formulas, functions, and data
                  visualization in Excel
                </li>
                <li>Design engaging presentations with PowerPoint</li>
                <li>
                  Manage emails, contacts, and schedules efficiently with
                  Outlook
                </li>
                <li>Integrate Office applications for maximum productivity</li>
              </ul>
            </div>
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-[#1E90FF]">
                Basic IT & Networking
              </h3>
              <ul className="ml-6 list-disc space-y-2 text-gray-600">
                <li>
                  Understand computer hardware components and their functions
                </li>
                <li>Install and configure operating systems and software</li>
                <li>Set up and troubleshoot home and small office networks</li>
                <li>Implement basic cybersecurity practices</li>
                <li>Perform routine maintenance and troubleshooting</li>
              </ul>
            </div>
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-[#1E90FF]">
                First Aid & Basic Mechanics
              </h3>
              <ul className="ml-6 list-disc space-y-2 text-gray-600">
                <li>Respond effectively to common emergency situations</li>
                <li>Perform CPR and use AED devices</li>
                <li>Identify and fix common vehicle issues</li>
                <li>Perform basic vehicle maintenance</li>
                <li>
                  Know when to seek professional help for complex problems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#1E90FF] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Enhance Your Skills?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Join our computer and special courses today and gain valuable skills
            for your personal and professional development.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              to="/register"
              className="flex items-center rounded-full bg-white/10 px-6 py-3 font-medium backdrop-blur-sm transition-colors hover:bg-white/20">
              
              Register Now
            </Button>
            <a
              href="tel:+254117564318"
              className="flex items-center rounded-full bg-white/10 px-6 py-3 font-medium backdrop-blur-sm transition-colors hover:bg-white/20">
              
              <Phone size={16} className="mr-2" />
              +254 117 564 318
            </a>
          </div>
        </div>
      </section>
    </div>);

}