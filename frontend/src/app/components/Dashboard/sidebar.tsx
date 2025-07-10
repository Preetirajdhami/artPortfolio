"use client"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { LayoutDashboard, Images, Package, MessageSquare, LogOut, Menu, X, Palette } from "lucide-react"

const AdminSidebar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    localStorage.removeItem("adminToken")
    router.push("/admin/login")
  }

  const toggleSidebar = () => setIsOpen(!isOpen)

  const menuItems = [
    {
      href: "/admin/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      href: "/admin/dashboard/gallery",
      icon: Images,
      label: "Gallery",
    },
    {
      href: "/admin/dashboard/comission",
      icon: Package,
      label: "Commissions",
    },
    {
      href: "/admin/dashboard/contact",
      icon: MessageSquare,
      label: "Contact",
    },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed w-full top-0 left-0 z-50 flex items-center justify-between px-4 py-3 bg-[#154930] shadow-lg">
        <div className="flex items-center space-x-2">
          <Palette className="h-6 w-6 text-[#ECE3CE]" />
          <h2 className="text-lg font-bold text-[#ECE3CE]">Art Admin</h2>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-[#ECE3CE] hover:bg-[#ECE3CE]/10 p-2 rounded-md transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-72 h-screen bg-[#154930] z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out shadow-2xl`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#ECE3CE]/20">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#ECE3CE]/10 rounded-lg">
              <Palette className="h-8 w-8 text-[#ECE3CE]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#ECE3CE]">Art Portfolio</h2>
              <p className="text-sm text-[#ECE3CE]/70">Admin Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center py-3 px-4 rounded-lg transition-all duration-200 group ${
                      isActive(item.href)
                        ? "bg-[#ECE3CE] text-[#154930] shadow-md"
                        : "text-[#ECE3CE] hover:bg-[#ECE3CE]/10 hover:translate-x-1"
                    }`}
                  >
                    <Icon className={`mr-3 h-5 w-5 ${isActive(item.href) ? "text-[#154930]" : "text-[#ECE3CE]/80"}`} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-6 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-start py-3 px-4 text-[#ECE3CE] hover:bg-red-500/20 hover:text-red-200 transition-colors duration-200 rounded-lg"
          >
            <LogOut className="mr-3 h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm" onClick={toggleSidebar} />}

      {/* Content area */}
      <div className="lg:ml-72 min-h-screen bg-[#ECE3CE] pt-16 lg:pt-0">{/* Content will be rendered here */}</div>
    </>
  )
}

export default AdminSidebar
