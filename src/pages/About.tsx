import React, { memo } from 'react';
import { Button } from '../components/ui/Button';
export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-gray-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">About Lashawn</h1>
          <p className="mx-auto max-w-2xl text-lg">
            Learn with Experts at Lashawn Driving and Computer College
          </p>
        </div>
      </div>
      {/* About Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Lashawn Driving and Computer College has evolved over the past 5 years. It was founded in 2020 to play the role of giving trainees the opportunity to learn with experts. 
                We believe in practical, hands-on learning that prepares our students for real-world challenges.
              </p>
              <p>
                Our college delivers professional driving and computer instruction in a friendly, safety-first environment. 
                Our experienced instructors teach practical driving, road-signs theory, and certification preparation across all 
                license categories. We also offer computer packages, basic mechanics, first aid, and a suite of business services to support individuals and companies.
              </p>
              <p>
                What sets us apart is our commitment to excellence and our
                motto: "Learn with Experts." Every instructor at Lashawn is a
                certified professional with years of experience in their field,
                ensuring that our students receive the best possible education.
              </p>
              <p>
                We have our branches in Kinamba and Eldoret towns, making it convenient for students 
                from different regions to access our services. Our state-of-the-art facilities and 
                well-maintained training vehicles provide an optimal learning environment.
              </p>
              <p>
                At Lashawn Driving and Computer College, we are dedicated to helping our students achieve their 
                goals and become skilled, confident professionals in driving and computer literacy.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Values */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  To provide holistic learning and services to our trainees and clients.
                </p>
                <h3 className="mt-6 mb-4 text-xl font-semibold text-gray-800">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                 To be a college that enables our trainees to 
                 learn with experts as well as provide the exact required services to our clients.
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                  Our Values
                </h2>
                <ul className="ml-6 list-disc space-y-2 text-gray-600">
                  <li>
                    <span className="font-semibold">Excellence:</span> Striving
                    for the highest standards in all our services
                  </li>
                  <li>
                    <span className="font-semibold">Safety:</span> Prioritizing
                    safety in all our training programs
                  </li>
                  <li>
                    <span className="font-semibold">Integrity:</span> Conducting
                    business with honesty and transparency
                  </li>
                  <li>
                    <span className="font-semibold">Innovation:</span> Embracing
                    new technologies and teaching methods
                  </li>
                  <li>
                    <span className="font-semibold">Community:</span> Supporting
                    and giving back to our local community
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Facilities Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Our Facilities
          </h2>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="overflow-hidden rounded-lg shadow-sm">
                <img
                  src="https://res.cloudinary.com/dgfmhyebp/image/upload/v1760686049/WhatsApp_Image_2025-10-16_at_3.02.25_PM_vnknei.jpg"
                  alt="Classroom"
                  className="h-48 w-full object-cover" />
                
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    Modern Classrooms
                  </h3>
                  <p className="text-gray-600">
                    Equipped with multimedia facilities for effective theory
                    classes and computer training.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-sm">
                <img
                  src="https://res.cloudinary.com/dgfmhyebp/image/upload/v1760686049/WhatsApp_Image_2025-10-16_at_3.02.26_PM_yhk3oz.jpg"
                  alt="Driving training"
                  className="h-48 w-full object-cover" />
                
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    Training Vehicles
                  </h3>
                  <p className="text-gray-600">
                    Well-maintained vehicles for all license categories to
                    ensure safe and effective practical training.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-sm">
                <img
                  src="https://res.cloudinary.com/dgfmhyebp/image/upload/v1760686049/WhatsApp_Image_2025-10-16_at_3.02.24_PM_2_t3nhf4.jpg"
                  alt="Printing services"
                  className="h-48 w-full object-cover" />
                
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    Printing & Service Center
                  </h3>
                  <p className="text-gray-600">
                    State-of-the-art printing equipment and dedicated service
                    areas for all your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#2E8B57] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Learn with Experts?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Join Lashawn Driving and Computer College today and start your
            journey towards acquiring valuable skills with our experienced
            instructors.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              to="/register"
              className="border-white text-white hover:bg-white/10">
              
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