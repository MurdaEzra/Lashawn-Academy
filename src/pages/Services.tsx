import React from 'react';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Button } from '../components/ui/Button';
import {
  Printer,
  PenTool,
  Globe,
  Settings,
  FileText,
  HelpCircle,
  Repeat,
  Award } from
'lucide-react';
export function Services() {
  const services = [
  {
    title: 'Printing Services',
    description:
    'Regular, large format, and plotter printing for documents, posters, banners, and more.',
    icon: <Printer size={24} />
  },
  {
    title: 'T-shirt & Branding',
    description:
    'Custom t-shirt printing, branding materials, and promotional items for businesses and events.',
    icon: <PenTool size={24} />
  },
  {
    title: 'Web Hosting & Design',
    description:
    'Website design, hosting, and maintenance services for businesses and individuals.',
    icon: <Globe size={24} />
  },
  {
    title: 'Software Installation',
    description:
    'Professional software installation, updates, and troubleshooting for your devices.',
    icon: <Settings size={24} />
  },
  {
    title: 'KRA Services',
    description:
    'Assistance with KRA PIN registration, returns filing, and tax compliance matters.',
    icon: <FileText size={24} />
  },
  {
    title: 'HELB Applications',
    description:
    'Guidance and support with HELB loan applications and management.',
    icon: <HelpCircle size={24} />
  },
  {
    title: 'Driving Licence Renewal',
    description:
    'Simplified process for renewing your driving licence without the hassle.',
    icon: <Repeat size={24} />
  },
  {
    title: 'eCitizen Services',
    description:
    'Assistance with eCitizen registration and various government services applications.',
    icon: <Award size={24} />
  }];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-[#D7263D] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg">
            Beyond training, we offer a comprehensive range of business and
            administrative services to support individuals and companies.
          </p>
        </div>
      </div>
      {/* Services Overview */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Services Overview
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At Lashawn, we pride ourselves on being a one-stop solution for
                various business and administrative needs. Our services are
                designed to save you time and ensure professional results.
              </p>
              <p>
                Whether you need printing services, government documentation
                assistance, or IT support, our experienced team is ready to help
                with efficiency and attention to detail.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button variant="outline" href="tel:+254117564318">
                Call for Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            Available Services
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) =>
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon} />

            )}
          </div>
        </div>
      </section>
      {/* Printing Services Highlight */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  Printing & Branding Services
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our printing department is equipped with state-of-the-art
                    printers capable of handling everything from standard
                    documents to large format posters and banners.
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Regular document printing and photocopying</li>
                    <li>Large format printing for posters and banners</li>
                    <li>Plotter services for technical drawings</li>
                    <li>T-shirt printing with custom designs</li>
                    <li>Business cards, letterheads, and branding materials</li>
                    <li>Graphic design services for all your printing needs</li>
                  </ul>
                  <p>
                    Contact us today to discuss your printing and branding
                    requirements. We offer competitive rates with quick
                    turnaround times.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Printing services"
                    className="h-auto w-full object-cover" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Government Services Highlight */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 flex items-center justify-center">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Government services"
                    className="h-auto w-full object-cover" />
                  
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                  Government & Administrative Services
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Navigate government processes with ease using our
                    administrative support services. We help with:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>KRA PIN registration and tax returns filing</li>
                    <li>HELB loan applications and management</li>
                    <li>eCitizen registration and service applications</li>
                    <li>Driving licence renewal and applications</li>
                    <li>Business registration and documentation</li>
                    <li>Other administrative support services</li>
                  </ul>
                  <p>
                    Our experienced team will guide you through the process,
                    ensuring all documentation is correctly completed and
                    submitted on time.
                  </p>
                </div>
                <div className="mt-6">
                  <Button variant="primary" to="/contact">
                    Inquire About Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#D7263D] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">Need Our Services?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Contact us today to discuss how we can assist with your business,
            printing, or administrative needs.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              to="/contact"
              className="border-white text-white hover:bg-white/10">
              
              Contact Us
            </Button>
            <Button
              variant="outline"
              href="tel:+254117564318"
              className="border-white text-white hover:bg-white/10">
              
              Call +254 117 564 318
            </Button>
          </div>
        </div>
      </section>
    </div>);

}