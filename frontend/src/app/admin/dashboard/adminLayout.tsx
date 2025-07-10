import AdminSidebar from "../../components/Dashboard/sidebar"
import type React from "react"

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#ECE3CE]">
      <AdminSidebar />
      <main className="lg:ml-72">{children}</main>
    </div>
  )
}

export default AdminLayout
