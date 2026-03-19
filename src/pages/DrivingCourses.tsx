import React from 'react';
import { CourseCard } from '../components/ui/CourseCard';
import { Button } from '../components/ui/Button';
import { Phone, CheckCircle, Clock, Award, Shield, Users } from 'lucide-react';
export function DrivingCourses() {
  const courses = [
  {
    title: 'Category A (Motorcycles)',
    category: 'Driving',
    description:
    'Practical training and theory for safe motorcycle operation, hazard avoidance, and road rules.',
    duration: '4-6 weeks',
    prerequisites: '18+ years, ID/Passport',
    imageUrl:
    'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Category B (Cars)',
    category: 'Driving',
    description:
    'Comprehensive training for beginners to advanced drivers, including practical lessons and test preparation.',
    duration: '6-8 weeks',
    prerequisites: '18+ years, ID/Passport',
    imageUrl:
    'https://res.cloudinary.com/dgfmhyebp/image/upload/v1760686048/WhatsApp_Image_2025-10-16_at_3.02.26_PM_1_hiduui.jpg'
  },
  {
    title: 'Category C (Light Commercial)',
    category: 'Driving',
    description:
    'Specialized training for light commercial vehicles with focus on load handling and driving safety.',
    duration: '8-10 weeks',
    prerequisites: 'Category B license, 21+ years',
    imageUrl:
    'https://res.cloudinary.com/dgfmhyebp/image/upload/v1760686048/WhatsApp_Image_2025-10-16_at_3.02.26_PM_3_r8ryit.jpg'
  },
  {
    title: 'Category D (Heavy Vehicles)',
    category: 'Driving',
    description:
    'Advanced training for buses, matatus and heavy vehicles with focus on passenger safety and regulations.',
    duration: '10-12 weeks',
    prerequisites: 'Category B license, 24+ years',
    imageUrl:
    'https://res.cloudinary.com/dgfmhyebp/image/upload/v1760686048/WhatsApp_Image_2025-10-16_at_3.02.27_PM_jgs1gx.jpg'
  },
  {
    title: 'Tuktuk (Three-wheelers)',
    category: 'Driving',
    description:
    'Specialized training for three-wheeler vehicles including practical driving and business-use training.',
    duration: '3-4 weeks',
    prerequisites: '18+ years, ID/Passport',
    imageUrl:
    'https://res.cloudinary.com/dgfmhyebp/image/upload/v1760687600/LASHAWN_DRIIVING_hhhg2q.png'
  }];

  

  // Added pricing data
  const pricingData = [
  {
    category: 'Category A (Motorcycles)',
    theoryOnly: 'KSh 5,000',
    practical: 'KSh 8,000',
    both: 'KSh 12,000'
  },
  {
    category: 'Category B (Cars)',
    theoryOnly: 'KSh 6,000',
    practical: 'KSh 12,000',
    both: 'KSh 16,000'
  },
  {
    category: 'Category C (Light Commercial)',
    theoryOnly: 'KSh 7,000',
    practical: 'KSh 14,000',
    both: 'KSh 19,000'
  },
  {
    category: 'Category D (Heavy Vehicles)',
    theoryOnly: 'KSh 8,000',
    practical: 'KSh 18,000',
    both: 'KSh 24,000'
  },
  {
    category: 'Tuktuk (Three-wheelers)',
    theoryOnly: 'KSh 4,000',
    practical: 'KSh 7,000',
    both: 'KSh 10,000'
  }];

  // Added benefits section
  const benefits = [
  {
    icon: <Shield size={24} />,
    title: 'Safety First Approach',
    description:
    'Our curriculum emphasizes defensive driving techniques to keep you and others safe on the road.'
  },
  {
    icon: <Users size={24} />,
    title: 'Experienced Instructors',
    description:
    'Learn from certified instructors with years of professional driving and teaching experience.'
  },
  {
    icon: <Clock size={24} />,
    title: 'Flexible Scheduling',
    description:
    'Choose from morning, afternoon, or evening sessions to fit your busy schedule.'
  },
  {
    icon: <Award size={24} />,
    title: 'Recognized Certification',
    description:
    'Receive a certificate that is recognized by employers and authorities across Kenya.'
  }];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-[#2E8B57] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Driving Courses
          </h1>
          <p className="mx-auto max-w-2xl text-lg">
            Professional driving instruction for all license categories with
            experienced instructors and comprehensive theory training.
          </p>
        </div>
      </div>
      {/* Benefits Section - NEW */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
              Why Choose Our Driving School
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) =>
              <div
                key={index}
                className="rounded-lg bg-gray-50 p-6 text-center">
                
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2E8B57]/10 text-[#2E8B57]">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Course Overview
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Our driving courses combine comprehensive theory classes with
                practical hands-on training to ensure you become a confident and
                safe driver. All courses include:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Thorough understanding of road signs and traffic rules</li>
                <li>Vehicle control and maneuvering techniques</li>
                <li>Defensive driving strategies</li>
                <li>Hazard perception and risk assessment</li>
                <li>Preparation for both theory and practical driving tests</li>
              </ul>
              <p>
                Our experienced instructors provide personalized attention to
                help you develop proper driving habits from the start.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button variant="primary" to="/register">
                Register Now
              </Button>
              <Button variant="outline" to="/fees">
                View Fee Structure
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Course List Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Available Driving Courses
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
      {/* License Requirements - NEW */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            License Requirements
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="overflow-x-auto rounded-lg shadow-sm">
              <table className="w-full border-collapse bg-white">
                <thead className="bg-[#2E8B57] text-white">
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-3 text-left">
                      License Category
                    </th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left">
                      Minimum Age
                    </th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left">
                      Prerequisites
                    </th>
                    <th className="border-b border-gray-200 px-4 py-3 text-left">
                      Vehicles Covered
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3 font-medium">
                      Category A
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      18 years
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      Valid ID/Passport
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      Motorcycles and three-wheelers
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-3 font-medium">
                      Category B
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      18 years
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      Valid ID/Passport
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      Cars and light vehicles up to 3,500 kg
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3 font-medium">
                      Category C
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      21 years
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      Category B license
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      Commercial vehicles over 3,500 kg
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border-b border-gray-200 px-4 py-3 font-medium">
                      Category D
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      24 years
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      Category B license
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      Buses, matatus (8+ passengers)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3 font-medium">
                      Tuktuk
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      18 years
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      Valid ID/Passport
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      Three-wheeler vehicles
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 rounded-md bg-blue-50 p-4 text-sm text-blue-800">
              <p>
                <span className="font-medium">Note:</span> All applicants must
                be medically fit to drive and pass both theory and practical
                examinations administered by the NTSA. Medical certificates can
                be obtained through our school.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section - NEW */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Course Pricing
          </h2>
          <div className="mx-auto max-w-4xl overflow-x-auto">
            <table className="w-full border-collapse rounded-lg shadow-sm">
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
                </tr>
              </thead>
              <tbody>
                {pricingData.map((price, index) =>
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  
                    <td className="border-b border-gray-200 px-4 py-3 font-medium">
                      {price.category}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      {price.theoryOnly}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3">
                      {price.practical}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 font-medium text-[#2E8B57]">
                      {price.both}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" to="/fees">
              View Complete Fee Structure
            </Button>
          </div>
        </div>
      </section>
      {/* Learning Process - NEW */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Our Learning Process
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2E8B57] text-white">
                  1
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Theory Classes
                </h3>
                <p className="text-gray-600">
                  Learn traffic rules, road signs, and safe driving principles
                  in our classroom sessions.
                </p>
                <ul className="mt-4 space-y-2 text-left text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-1 text-green-500" />
                    
                    <span>Road signs and markings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-1 text-green-500" />
                    
                    <span>Traffic laws and regulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-1 text-green-500" />
                    
                    <span>Vehicle mechanics basics</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2E8B57] text-white">
                  2
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Practical Training
                </h3>
                <p className="text-gray-600">
                  Get behind the wheel with our instructors for hands-on driving
                  experience.
                </p>
                <ul className="mt-4 space-y-2 text-left text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-1 text-green-500" />
                    
                    <span>Vehicle controls and operation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-1 text-green-500" />
                    
                    <span>Basic and advanced maneuvers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-1 text-green-500" />
                    
                    <span>Real traffic situations</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2E8B57] text-white">
                  3
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Test Preparation
                </h3>
                <p className="text-gray-600">
                  Prepare for and pass your official driving tests with our
                  guidance.
                </p>
                <ul className="mt-4 space-y-2 text-left text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-1 text-green-500" />
                    
                    <span>Theory test practice</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-1 text-green-500" />
                    
                    <span>Practical test rehearsals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={16}
                      className="mr-2 mt-1 text-green-500" />
                    
                    <span>Test day support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - NEW */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800">
                  How long does it take to get a driving license?
                </h3>
                <p className="mt-2 text-gray-600">
                  The process typically takes 6-8 weeks for Category B (cars),
                  including both theory and practical training, followed by
                  testing through NTSA. Other categories may vary in duration.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800">
                  Do you provide vehicles for the driving test?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, we provide vehicles for your driving test. Our vehicles
                  are well-maintained and regularly inspected to ensure they
                  meet all safety requirements.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800">
                  What happens if I fail my driving test?
                </h3>
                <p className="mt-2 text-gray-600">
                  If you don't pass your test the first time, we offer
                  additional training sessions focused on the areas that need
                  improvement, followed by test retakes until you succeed.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800">
                  Can I upgrade from one license category to another?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, you can upgrade your license category. For example, from
                  Category B to C or D, provided you meet the age requirements
                  and have held the prerequisite license for the required
                  period.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" to="/faq">
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#2E8B57] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Start Your Driving Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Our professional instructors are ready to help you become a
            confident and safe driver. Book your first lesson today!
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              to="/register"
              className="border-white text-white hover:bg-white/10">
              
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