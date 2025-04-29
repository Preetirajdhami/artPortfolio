"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-serif text-gray-900">
          PREETI ARTS
        </Link>

        {/* Hamburger menu for mobile */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 text-gray-900" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className={`text-sm uppercase tracking-wider font-medium relative ${
              isActive('/') 
                ? 'text-gray-900 after:content-[""] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-full after:bg-gray-900' 
                : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className={`text-sm uppercase tracking-wider font-medium relative ${
              isActive('/gallery') 
                ? 'text-gray-900 after:content-[""] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-full after:bg-gray-900' 
                : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            Gallery
          </Link>
          <Link
            href="/commission"
            className={`text-sm uppercase tracking-wider font-medium relative ${
              isActive('/commission') 
                ? 'text-gray-900 after:content-[""] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-full after:bg-gray-900' 
                : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            Commission
          </Link>
          <Link
            href="/contact"
            className={`text-sm uppercase tracking-wider font-medium relative ${
              isActive('/contact') 
                ? 'text-gray-900 after:content-[""] after:absolute after:left-0 after:bottom-[-6px] after:h-0.5 after:w-full after:bg-gray-900' 
                : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 pt-2 pb-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-sm uppercase tracking-wider font-medium py-2 ${
                isActive('/') ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`text-sm uppercase tracking-wider font-medium py-2 ${
                isActive('/gallery') ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/commission"
              className={`text-sm uppercase tracking-wider font-medium py-2 ${
                isActive('/commission') ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Commission
            </Link>
            <Link
              href="/contact"
              className={`text-sm uppercase tracking-wider font-medium py-2 ${
                isActive('/contact') ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;