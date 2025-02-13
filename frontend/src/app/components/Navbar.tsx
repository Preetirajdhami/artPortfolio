"use client"; // Required for interactivity (e.g., useState)

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#F6F1EB] shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-xl font-bold text-gray-600">
          Preeti Arts
        </Link>

        {/* Hamburger Menu Icon (for small screens) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links (for larger screens) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-gray-900">
            Gallery
          </Link>
          <Link href="/commission" className="text-gray-700 hover:text-gray-900">
            Commission 
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (for small screens) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F6F1EB] shadow-lg">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/gallery" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Gallery
          </Link>
          <Link href="/commission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Commission 
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
