"use client"
import Link from "next/link"
import type React from "react"

import { usePathname } from "next/navigation"
import { useState } from "react"

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="py-4 responsive-padding mt-3">
      <div className=" mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-serif text-primary">
          PREETI ARTS
        </Link>

        <button className="lg:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            className="w-6 h-6 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden lg:flex items-center">
          <div className="bg-primary rounded-3xl px-6 py-3 flex justify-center gap-24 w-[700px]">
            <Link
              href="/"
              className={`text-base font-medium relative ${
                isActive("/")
                  ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-12px] after:text-white after:text-2xl'
                  : "text-white hover:text-gray-200"
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`text-base font-medium relative ${
                isActive("/gallery")
                  ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-12px] after:text-white after:text-2xl'
                  : "text-white hover:text-gray-200"
              } transition-colors`}
            >
              Gallery
            </Link>
            <Link
              href="/commission"
              className={`text-base font-medium relative ${
                isActive("/commission")
                  ? 'text-white after:content-["."] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-12px] after:text-white after:text-2xl'
                  : "text-white hover:text-gray-200"
              } transition-colors`}
            >
              Commission
            </Link>
            <Link
              href="/contact"
              className={`text-base font-medium relative ${
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
  )
}

export default Navbar