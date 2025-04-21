"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to check active path
  const isActive = (path: string) => pathname === path;

  return (

    <nav className="bg-primary shadow-md relative">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo or Brand Name */}
        <Link href="/" className="text-xl font-bold text-gray-600">
          Preeti Arts
        </Link>

        {/* Hamburger Menu Icon (for small screens) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-background hover:text-accent focus:outline-none transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links (for larger screens) */}
        <div className="hidden md:flex space-x-6">
          <Link 
            href="/" 

            className={`${isActive('/') ? 'text-[#DAC0A3] font-bold' : 'text-[#2B391F] font-bold'} hover:text-[#DAC0A3]`}

          >
            Home
          </Link>
          <Link 
            href="/gallery" 

            className={`${isActive('/gallery') ? '' : 'text-background'} font-bold hover:text-accent transition-colors`}


          >
            Gallery
          </Link>
          <Link 
            href="/commission" 
            className={`${isActive('/commission') ? 'text-[#DAC0A3] font-bold' : 'text-[#2B391F] font-bold'} hover:text-[#DAC0A3]`}
          >
            Commission 
          </Link>
          <Link 
            href="/contact" 
            className={`${isActive('/contact') ? 'text-[#DAC0A3] font-bold' : 'text-[#2B391F] font-bold'} hover:text-[#DAC0A3]`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (for small screens) */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-0 top-12 bg-[#F6F1EB] shadow-lg rounded-lg m-2 z-50">
          <Link 
            href="/" 
            onClick={closeMenu}
            className={`block px-6 py-3 ${isActive('/') ? 'text-[#DAC0A3] font-bold' : 'text-gray-700 font-bold'} hover:bg-gray-100`}
          >
            Home
          </Link>
          <Link 
            href="/gallery" 
            onClick={closeMenu}
            className={`block px-6 py-3 ${isActive('/gallery') ? 'text-[#DAC0A3] font-bold' : 'text-gray-700 font-bold'} hover:bg-gray-100`}
          >
            Gallery
          </Link>
          <Link 
            href="/commission" 
            onClick={closeMenu}
            className={`block px-6 py-3 ${isActive('/commission') ? 'text-[#DAC0A3] font-bold' : 'text-gray-700 font-bold'} hover:bg-gray-100`}
          >
            Commission 
          </Link>
          <Link 
            href="/contact" 
            onClick={closeMenu}
            className={`block px-6 py-3 ${isActive('/contact') ? 'text-[#DAC0A3] font-bold' : 'text-gray-700 font-bold'} hover:bg-gray-100`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;