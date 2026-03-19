import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dgfmhyebp/image/upload/v1773227181/Logo_kwrpld.png"
              alt="Lashawn Driving & Computer College"
              className="h-16 w-auto object-contain" />
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block flex-1 mx-8">
            <ul className="flex justify-between items-center w-full text-sm font-medium">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-[#2E8B57] transition-colors">
                  
                  Home
          
                  
                </Link>
              </li>

              <li>
                <Link
                  to="/driving-courses"
                  className="text-gray-700 hover:text-[#2E8B57] transition-colors">
                  
                  Driving
                </Link>
              </li>

              <li>
                <Link
                  to="/computer-courses"
                  className="text-gray-700 hover:text-[#2E8B57] transition-colors">
                  
                  Computer
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-700 hover:text-[#2E8B57] transition-colors">
                  
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/fees"
                  className="text-sm font-medium text-gray-700 hover:text-[#2E8B57] transition-colors">
                  
                  Fees
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-sm font-medium text-[#2E8B57] hover:text-[#1e6b41] transition-colors">
                  
                  Enroll
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-[#2E8B57] transition-colors">
                  
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-700 hover:text-[#2E8B57] transition-colors">
                  
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-[#2E8B57] transition-colors">
                  
                  Contact
                </Link>
              </li>
              <li className="flex items-center space-x-4 border-l border-gray-200 pl-4">
                <Link
                  to="/admin/login"
                  className="text-gray-500 hover:text-[#2E8B57] transition-colors"
                  title="Admin Portal">
                  
                  Admin
                </Link>
              </li>
            </ul>
          </nav>

          {/* Call Button */}
          <div className="hidden md:block lg:hidden xl:block">
            <a
              href="tel:+254117564318"
              className="flex items-center rounded-full bg-[#D7263D] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c01c31]">
              
              <Phone size={16} className="mr-2" />
              <span>+254 117 564 318</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block lg:hidden ml-4 relative z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            
            {isMenuOpen ?
            <X size={24} className="text-gray-800" /> :

            <Menu size={24} className="text-gray-800" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Hanging Menu */}
      {isMenuOpen &&
      <>
          <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleMenu} />
        
          <div className="absolute left-0 right-0 top-full z-40 lg:hidden">
            <div className="mx-4 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <Link
                    to="/"
                    className="block px-4 py-3 text-gray-700 hover:text-[#2E8B57] hover:bg-[#2E8B57]/5 rounded-xl transition-colors font-medium"
                    onClick={toggleMenu}>
                    
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="/driving-courses"
                    className="block px-4 py-3 text-gray-700 hover:text-[#2E8B57] hover:bg-[#2E8B57]/5 rounded-xl transition-colors font-medium"
                    onClick={toggleMenu}>
                    
                      Driving Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="/computer-courses"
                    className="block px-4 py-3 text-gray-700 hover:text-[#2E8B57] hover:bg-[#2E8B57]/5 rounded-xl transition-colors font-medium"
                    onClick={toggleMenu}>
                    
                      Computer Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="/services"
                    className="block px-4 py-3 text-gray-700 hover:text-[#2E8B57] hover:bg-[#2E8B57]/5 rounded-xl transition-colors font-medium"
                    onClick={toggleMenu}>
                    
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="/fees"
                    className="block px-4 py-3 text-gray-700 hover:text-[#2E8B57] hover:bg-[#2E8B57]/5 rounded-xl transition-colors font-medium"
                    onClick={toggleMenu}>
                    
                      Fees
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="/register"
                    className="block px-4 py-3 text-[#2E8B57] hover:bg-[#2E8B57]/5 rounded-xl transition-colors font-bold"
                    onClick={toggleMenu}>
                    
                      Enroll
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="/about"
                    className="block px-4 py-3 text-gray-700 hover:text-[#2E8B57] hover:bg-[#2E8B57]/5 rounded-xl transition-colors font-medium"
                    onClick={toggleMenu}>
                    
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="/faq"
                    className="block px-4 py-3 text-gray-700 hover:text-[#2E8B57] hover:bg-[#2E8B57]/5 rounded-xl transition-colors font-medium"
                    onClick={toggleMenu}>
                    
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="/contact"
                    className="block px-4 py-3 text-gray-700 hover:text-[#2E8B57] hover:bg-[#2E8B57]/5 rounded-xl transition-colors font-medium"
                    onClick={toggleMenu}>
                    
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="border-t border-gray-100 mt-3 pt-3 flex gap-3">
                  <Link
                  to="/admin/login"
                  className="flex-1 text-center px-4 py-2.5 text-sm text-gray-500 hover:text-[#2E8B57] border border-gray-200 rounded-xl transition-colors"
                  onClick={toggleMenu}>
                  
                    Admin
                  {/* Student Portal link removed */}
                    Student Portal
                  </Link>
                </div>
                <a
                href="tel:+254117564318"
                className="flex items-center justify-center mt-3 rounded-xl bg-[#D7263D] px-4 py-3 text-white font-medium"
                onClick={toggleMenu}>
                
                  <Phone size={16} className="mr-2" />
                  <span>Call Us</span>
                </a>
              </nav>
            </div>
          </div>
        </>
      }
    </header>);

}