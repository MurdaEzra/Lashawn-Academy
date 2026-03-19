import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <img
              src="https://res.cloudinary.com/dgfmhyebp/image/upload/v1773227181/Logo_kwrpld.png"
              alt="Lashawn Driving & Computer College"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert" />
            
            <p className="mb-4 text-gray-300">
              Professional driving and computer instruction in a friendly,
              safety-first environment. Learn with experts and build valuable
              skills for your future.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook">
                
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram">
                
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter">
                
                <Twitter size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/driving-courses"
                  className="text-gray-300 hover:text-white">
                  
                  Driving Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/computer-courses"
                  className="text-gray-300 hover:text-white">
                  
                  Computer Courses
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Driving Lessons (All Categories)
              </li>
              <li className="text-gray-300">Computer Training</li>
              <li className="text-gray-300">First Aid & Basic Mechanics</li>
              <li className="text-gray-300">Printing & Branding</li>
              <li className="text-gray-300">KRA & HELB Services</li>
              <li className="text-gray-300">eCitizen Support</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 mt-1 flex-shrink-0 text-[#2E8B57]" />
                
                <span className="text-gray-300">
                  Along Eldoret Roadblock — Opposite Khetias Supermarket
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="mr-2 flex-shrink-0 text-[#2E8B57]" />
                
                <a
                  href="tel:+254117564318"
                  className="text-gray-300 hover:text-white">
                  
                  +254 117 564 318
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-[#2E8B57]" />
                <a
                  href="mailto:lashawnlimited@gmail.com"
                  className="text-gray-300 hover:text-white">
                  
                  lashawnlimited@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Lashawn Driving and Computer College.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}