"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith("/admin")

  if (isAdminPage) {
    // Admin pages: No header/footer, custom styling
    return <div className="min-h-screen bg-[#ECE3CE] text-[#3A4D39]">{children}</div>
  }

  // Regular pages: With header and footer
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-28">{children}</main>
      <Footer />
    </>
  )
}
