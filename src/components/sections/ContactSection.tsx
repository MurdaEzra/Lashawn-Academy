import React, { lazy } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
export function ContactSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Visit our college, call us, or send an email. We're here to help you
            start your learning journey.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin
                  className="mr-3 mt-1 flex-shrink-0 text-[#2E8B57]"
                  size={20} />
                
                <span className="text-gray-600">
                  Along Eldoret Roadblock — Opposite Khetias Supermarket
                </span>
              </div>
              <div className="flex items-center">
                <Phone
                  className="mr-3 flex-shrink-0 text-[#2E8B57]"
                  size={20} />
                
                <a
                  href="tel:+254117564318"
                  className="text-gray-600 hover:text-[#2E8B57]">
                  
                  +254 117 564 318
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 flex-shrink-0 text-[#2E8B57]" size={20} />
                <a
                  href="mailto:lashawnlimited@gmail.com"
                  className="text-gray-600 hover:text-[#2E8B57]">
                  
                  lashawnlimited@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <Clock
                  className="mr-3 mt-1 flex-shrink-0 text-[#2E8B57]"
                  size={20} />
                
                <div className="text-gray-600">
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button
                variant="primary"
                href="https://www.google.com/maps?q=Eldoret+Roadblock"
                className="w-full">
                
                View on Google Maps
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.656641285244!2d35.2616!3d0.5143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101ae37f9f535%3A0xe2db337bf071c994!2sEldoret!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: '300px'
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lashawn Location">
            </iframe>
          </div>
        </div>
      </div>
    </section>);

}