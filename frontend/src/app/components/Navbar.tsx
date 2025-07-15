"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import type React from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="responsive-padding py-4">
        <div className="mx-auto flex justify-between items-center">
          <Link
            href="/"
            className={`text-3xl font-serif ${
              isScrolled ? "text-white" : "text-primary"
            }`}
          >
            PREETI ARTS
          </Link>

          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-8 h-8 ${
                isScrolled ? "text-white" : "text-gray-900"
              }`}
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <div
              className={`rounded-3xl px-6  flex justify-center gap-24 w-[700px] ${
                isScrolled ? "" : "bg-primary"
              }`}
            >
              <Link
                href="/"
                className={`text-base py-3 font-medium relative ${
                  isActive("/")
                    ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-12px] after:text-white after:text-2xl'
                    : "text-white hover:text-gray-200"
                } transition-colors`}
              >
                Home
              </Link>

              {/* Gallery with Dropdown */}
              <div className="relative group">
                <div
                  className={`cursor-pointer py-3 text-base font-medium relative ${
                    isActive("/gallery")
                      ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-12px] after:text-white after:text-2xl'
                      : "text-white hover:text-gray-200"
                  } transition-colors`}
                >
                  Gallery
                </div>

                {/* Dropdown */}
                <div className="absolute left-1/2 -translate-x-1/2  hidden group-hover:flex flex-col bg-white/80 shadow-lg rounded-md min-w-[200px] z-50 py-2 transition duration-200 ease-in-out group-hover:transition-delay-300">
                  <Link
                    href="/gallery/graphite-and-charcoal"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                  >
                    Graphite & Charcoal
                  </Link>
                  <Link
                    href="/gallery/watercolor"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                  >
                    Watercolor
                  </Link>
                  <Link
                    href="/gallery/acrylic"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                  >
                    Acrylic
                  </Link>
                </div>
              </div>

              <Link
                href="/commission"
                className={`text-base py-3 font-medium relative ${
                  isActive("/commission")
                    ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-12px] after:text-white after:text-2xl'
                    : "text-white hover:text-gray-200"
                } transition-colors`}
              >
                Commission
              </Link>
              <Link
                href="/contact"
                className={`text-base py-3 font-medium relative ${
                  isActive("/contact")
                    ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-12px] after:text-white after:text-2xl'
                    : "text-white hover:text-gray-200"
                } transition-colors`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary mt-2">
          <div className="px-4 py-2">
            <div className="flex flex-col space-y-4 items-center px-4">
              <Link
                href="/"
                className={`text-base font-medium py-2 relative ${
                  isActive("/")
                    ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:text-white after:text-2xl'
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className={`text-base font-medium py-2 relative ${
                  isActive("/gallery")
                    ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:text-white after:text-2xl'
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/commission"
                className={`text-base font-medium py-2 relative ${
                  isActive("/commission")
                    ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:text-white after:text-2xl'
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Commission
              </Link>
              <Link
                href="/contact"
                className={`text-base font-medium py-2 relative ${
                  isActive("/contact")
                    ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:text-white after:text-2xl'
                    : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
