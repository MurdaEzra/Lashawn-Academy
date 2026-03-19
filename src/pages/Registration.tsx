import React from 'react';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
export function Registration() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2E8B57]/10 mb-6">
            <ShieldCheck className="h-8 w-8 text-[#2E8B57]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Enrollment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To ensure the highest quality of service and proper documentation,
            all student registrations are handled directly by our administration
            office.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-[#2E8B57] mr-3" />
              Visit Our Office
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Come to our main office to complete your registration. Our staff
              will guide you through the available courses, fee structures, and
              help you choose the best schedule.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Along Eldoret Roadblock
                  <br />
                  Opposite Khetias Supermarket
                </span>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 4:00 PM
                </span>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="primary" to="/contact" className="w-full">
                Get Directions
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Phone className="h-6 w-6 text-[#2E8B57] mr-3" />
              Contact Us First
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Have questions before you visit? Call us to discuss your
              requirements, check course availability, or get a breakdown of the
              fees.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+254117564318"
                  className="hover:text-[#2E8B57] font-medium text-lg">
                  
                  +254 117 564 318
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:lashawnlimited@gmail.com"
                  className="hover:text-[#2E8B57]">
                  
                  lashawnlimited@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-8">
              <Button
                variant="outline"
                href="tel:+254117564318"
                className="w-full">
                
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-[#2E8B57]/5 rounded-2xl border border-[#2E8B57]/20 p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            What to bring for registration:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center text-gray-700">
              <div className="w-2 h-2 rounded-full bg-[#2E8B57] mr-3"></div>
              Original National ID or Passport
            </li>
            <li className="flex items-center text-gray-700">
              <div className="w-2 h-2 rounded-full bg-[#2E8B57] mr-3"></div>
              Copy of National ID/Passport
            </li>
            <li className="flex items-center text-gray-700">
              <div className="w-2 h-2 rounded-full bg-[#2E8B57] mr-3"></div>2
              Passport-sized photographs
            </li>
            <li className="flex items-center text-gray-700">
              <div className="w-2 h-2 rounded-full bg-[#2E8B57] mr-3"></div>
              Initial fee deposit (M-Pesa or Card)
            </li>
          </ul>
        </div>
      </div>
    </div>);

}