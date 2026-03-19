import React from 'react';
import { Button } from '../components/ui/Button';
import { Phone, HelpCircle } from 'lucide-react';
export function Fees() {
  const drivingFees = [
  {
    category: 'Category A (Motorcycles)',
    theoryOnly: 'KSh 5,000',
    practical: 'KSh 8,000',
    both: 'KSh 12,000',
    duration: '4-6 weeks',
    includes: [
    'Road signs training',
    'Highway code',
    '10 practical lessons',
    'Test preparation']

  },
  {
    category: 'Category B (Cars)',
    theoryOnly: 'KSh 6,000',
    practical: 'KSh 12,000',
    both: 'KSh 16,000',
    duration: '6-8 weeks',
    includes: [
    'Road signs training',
    'Highway code',
    '15 practical lessons',
    'Defensive driving',
    'Test preparation']

  },
  {
    category: 'Category C (Light Commercial)',
    theoryOnly: 'KSh 7,000',
    practical: 'KSh 14,000',
    both: 'KSh 19,000',
    duration: '8-10 weeks',
    includes: [
    'Road signs training',
    'Highway code',
    'Commercial vehicle regulations',
    '15 practical lessons',
    'Load handling',
    'Test preparation']

  },
  {
    category: 'Category D (Heavy Vehicles)',
    theoryOnly: 'KSh 8,000',
    practical: 'KSh 18,000',
    both: 'KSh 24,000',
    duration: '10-12 weeks',
    includes: [
    'Road signs training',
    'Highway code',
    'PSV regulations',
    '20 practical lessons',
    'Passenger safety',
    'Test preparation']

  },
  {
    category: 'Tuktuk (Three-wheelers)',
    theoryOnly: 'KSh 4,000',
    practical: 'KSh 7,000',
    both: 'KSh 10,000',
    duration: '3-4 weeks',
    includes: [
    'Road signs training',
    'Highway code',
    '8 practical lessons',
    'Business use training',
    'Test preparation']

  }];

  const computerFees = [
  {
    course: 'Microsoft Office Suite',
    basic: 'KSh 8,000',
    advanced: 'KSh 12,000',
    duration: '4 weeks',
    includes: [
    'Word',
    'Excel',
    'PowerPoint',
    'Outlook',
    'Certificate upon completion',
    'Practice materials']

  },
  {
    course: 'Basic IT & Networking',
    basic: 'KSh 10,000',
    advanced: 'KSh 15,000',
    duration: '6 weeks',
    includes: [
    'Computer hardware',
    'Operating systems',
    'Network setup',
    'Troubleshooting',
    'Certificate upon completion']

  },
  {
    course: 'Graphic Design Fundamentals',
    basic: 'KSh 12,000',
    advanced: 'KSh 18,000',
    duration: '8 weeks',
    includes: [
    'Design principles',
    'Basic software skills',
    'Project portfolio',
    'Certificate upon completion']

  }];

  const specialCourses = [
  {
    course: 'First Aid Training',
    fee: 'KSh 5,000',
    duration: '2 weeks',
    includes: [
    'Emergency response',
    'CPR training',
    'Wound care',
    'Certificate upon completion']

  },
  {
    course: 'Basic Mechanics',
    fee: 'KSh 7,000',
    duration: '3 weeks',
    includes: [
    'Vehicle maintenance',
    'Troubleshooting',
    'Emergency repairs',
    'Certificate upon completion']

  }];

  const additionalServices = [
  {
    service: 'KRA PIN Registration',
    fee: 'KSh 500'
  },
  {
    service: 'HELB Application Assistance',
    fee: 'KSh 800'
  },
  {
    service: 'eCitizen Service Support',
    fee: 'KSh 500'
  },
  {
    service: 'Driving License Renewal',
    fee: 'KSh 1,000'
  },
  {
    service: 'Business Card Printing (100 pcs)',
    fee: 'KSh 1,000'
  },
  {
    service: 'T-shirt Printing',
    fee: 'From KSh 800'
  },
  {
    service: 'Banner Printing (per sq meter)',
    fee: 'KSh 1,500'
  }];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-gray-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Fees Structure
          </h1>
          <p className="mx-auto max-w-2xl text-lg">
            Transparent pricing for all our driving courses, computer training,
            and additional services.
          </p>
        </div>
      </div>
      {/* Fee Overview Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Fee Overview
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Lashawn Driving and Computer College, we strive to provide
                quality education at competitive rates. Our fee structure is
                designed to be transparent and affordable.
              </p>
              <p>All course fees include:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Professional instruction from certified trainers</li>
                <li>Course materials and handouts</li>
                <li>Access to our facilities during training</li>
                <li>Certificate upon successful completion</li>
                <li>Job placement assistance where applicable</li>
              </ul>
              <p className="mt-4 text-sm italic">
                * Prices are subject to change. Please contact us to confirm the
                current rates.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button variant="primary" to="/register">
                Register Now
              </Button>
              <Button variant="outline" href="tel:+254117564318">
                <Phone size={16} className="mr-2" />
                Call for Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Driving Course Fees */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Driving Course Fees
          </h2>
          <div className="mx-auto max-w-5xl overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-white shadow-sm">
              <thead className="bg-[#2E8B57] text-white">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">
                    Category
                  </th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">
                    Theory Only
                  </th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">
                    Practical Only
                  </th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">
                    Theory & Practical
                  </th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {drivingFees.map((fee, index) =>
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  
                    <td className="border-b border-gray-200 px-4 py-3 font-medium">
                      {fee.category}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      {fee.theoryOnly}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      {fee.practical}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 font-medium text-[#2E8B57]">
                      {fee.both}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      {fee.duration}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-800">
                <HelpCircle size={18} className="mr-2 text-[#2E8B57]" />
                What's Included in Driving Courses
              </h3>
              <ul className="ml-6 list-disc space-y-1 text-gray-600">
                <li>
                  Professional instruction from certified driving instructors
                </li>
                <li>Comprehensive road signs and traffic rules training</li>
                <li>Vehicle handling and maneuvering techniques</li>
                <li>Defensive driving strategies</li>
                <li>Test preparation and guidance</li>
                <li>Certificate upon successful completion</li>
              </ul>
              <div className="mt-4 rounded-md bg-blue-50 p-4 text-sm text-blue-800">
                <p className="font-medium">Additional Costs:</p>
                <ul className="ml-4 mt-1 list-disc">
                  <li>
                    Medical certificate: KSh 1,000 (can be obtained through us)
                  </li>
                  <li>
                    NTSA testing fees: Varies by category (KSh 1,000 - 2,500)
                  </li>
                  <li>License issuance fee: KSh 3,000</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button variant="primary" to="/driving-courses">
              View Driving Course Details
            </Button>
          </div>
        </div>
      </section>
      {/* Computer Course Fees */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Computer Course Fees
          </h2>
          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-white shadow-sm">
              <thead className="bg-[#1E90FF] text-white">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">
                    Course
                  </th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">
                    Basic Package
                  </th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">
                    Advanced Package
                  </th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {computerFees.map((fee, index) =>
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  
                    <td className="border-b border-gray-200 px-4 py-3 font-medium">
                      {fee.course}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      {fee.basic}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 font-medium text-[#1E90FF]">
                      {fee.advanced}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      {fee.duration}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 flex items-center text-lg font-semibold text-gray-800">
                <HelpCircle size={18} className="mr-2 text-[#1E90FF]" />
                What's Included in Computer Courses
              </h3>
              <ul className="ml-6 list-disc space-y-1 text-gray-600">
                <li>Hands-on training with dedicated computers</li>
                <li>Comprehensive course materials</li>
                <li>Practical assignments and projects</li>
                <li>One-on-one assistance when needed</li>
                <li>Certificate upon successful completion</li>
              </ul>
              <div className="mt-4 rounded-md bg-blue-50 p-4 text-sm text-blue-800">
                <p>
                  <span className="font-medium">Basic vs. Advanced:</span>{' '}
                  Advanced packages include additional modules, more practical
                  hours, and specialized topics not covered in the basic
                  package.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button variant="primary" to="/computer-courses">
              View Computer Course Details
            </Button>
          </div>
        </div>
      </section>
      {/* Special Courses Fees */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Special Courses
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {specialCourses.map((course, index) =>
            <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {course.course}
                </h3>
                <div className="mb-4 flex items-baseline">
                  <span className="text-2xl font-bold text-[#D7263D]">
                    {course.fee}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    / {course.duration}
                  </span>
                </div>
                <div className="mb-4 h-px w-full bg-gray-200"></div>
                <ul className="mb-6 space-y-2">
                  {course.includes.map((item, i) =>
                <li key={i} className="flex items-center text-gray-600">
                      <svg
                    className="mr-2 h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    
                        <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7">
                    </path>
                      </svg>
                      {item}
                    </li>
                )}
                </ul>
                <Button variant="outline" to="/register" className="w-full">
                  Register Now
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Additional Services Fees */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Additional Services
          </h2>
          <div className="mx-auto max-w-3xl overflow-x-auto">
            <table className="w-full border-collapse rounded-lg bg-white shadow-sm">
              <thead className="bg-[#D7263D] text-white">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">
                    Service
                  </th>
                  <th className="border-b border-gray-200 px-4 py-3 text-right">
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {additionalServices.map((service, index) =>
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  
                    <td className="border-b border-gray-200 px-4 py-3">
                      {service.service}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 text-right font-medium">
                      {service.fee}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <p className="mb-4 text-gray-600">
              Need a custom service or have questions about our pricing?
            </p>
            <Button variant="primary" to="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      {/* Payment Plans Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Payment Plans
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We understand that investing in education can be a significant
                commitment. That's why we offer flexible payment options to make
                our courses more accessible:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <span className="font-medium">Full Payment:</span> Pay the
                  entire course fee upfront and receive a 5% discount.
                </li>
                <li>
                  <span className="font-medium">Installment Plan:</span> Pay 50%
                  of the course fee before starting, and the remaining amount in
                  equal installments throughout the course.
                </li>
                <li>
                  <span className="font-medium">Group Discounts:</span> Enroll
                  with friends or colleagues (3 or more) and receive a 10%
                  discount per person.
                </li>
              </ul>
              <p className="mt-4">
                To discuss payment options or to set up a payment plan, please
                contact our administrative office.
              </p>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button variant="primary" to="/register">
                Register Now
              </Button>
              <Button variant="outline" href="tel:+254117564318">
                <Phone size={16} className="mr-2" />
                Call for Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#2E8B57] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Invest in Your Future?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Enroll in one of our courses today and take the first step toward
            building valuable skills for your personal and professional
            development.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              to="/register"
              className="bg-white text-[#2E8B57] hover:bg-gray-100">
              
              Register Now
            </Button>
            <Button
              variant="outline"
              to="/contact"
              className="border-white text-white hover:bg-white/10">
              
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>);

}