"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import AdminSidebar from "../../../components/Dashboard/sidebar"
import { CalendarDays, Mail, MapPin, Package, User, ImageIcon, Loader2 } from "lucide-react"

interface Commission {
  _id: string
  firstName: string
  lastName: string
  email: string
  portraitImage: string
  numberOfPortraits: number
  size: string
  shippingDestination: string
  deadline: string
  additionalInfo?: string
  createdAt: string
}

const ManageOrders = () => {
  const [commissions, setCommissions] = useState<Commission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCommissions = async () => {
      try {
        const response = await axios.get("https://artportfolio-backend.onrender.com/api/comissions")
        setCommissions(response.data)
      } catch (error) {
        console.error("Error fetching commissions:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCommissions()
  }, [])

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getSizeBadgeColor = (size: string) => {
    switch (size.toLowerCase()) {
      case "small":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "large":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#3A4D39] mb-2">Commission Management</h1>
            <p className="text-[#3A4D39]/70">Manage and track your commission orders</p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-[#154930]" />
              <span className="ml-2 text-[#3A4D39]">Loading commissions...</span>
            </div>
          ) : commissions.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-12 text-center">
              <Package className="h-16 w-16 text-[#154930]/30 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#3A4D39] mb-2">No Commissions Found</h3>
              <p className="text-[#3A4D39]/60">When clients submit commission requests, they will appear here.</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {commissions.map((commission) => (
                <div
                  key={commission._id}
                  className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-200 p-6"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 bg-[#154930] text-[#ECE3CE] rounded-full flex items-center justify-center font-semibold">
                        {getInitials(commission.firstName, commission.lastName)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#3A4D39]">
                          {commission.firstName} {commission.lastName}
                        </h3>
                        <div className="flex items-center mt-1 text-[#3A4D39]/70">
                          <Mail className="h-4 w-4 mr-1" />
                          <span className="text-sm">{commission.email}</span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getSizeBadgeColor(commission.size)}`}
                    >
                      {commission.size}
                    </span>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-[#154930]" />
                      <div>
                        <p className="text-sm font-medium text-[#3A4D39]">Portraits</p>
                        <p className="text-sm text-[#3A4D39]/70">{commission.numberOfPortraits}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-[#154930]" />
                      <div>
                        <p className="text-sm font-medium text-[#3A4D39]">Shipping</p>
                        <p className="text-sm text-[#3A4D39]/70">{commission.shippingDestination}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <CalendarDays className="h-4 w-4 text-[#154930]" />
                      <div>
                        <p className="text-sm font-medium text-[#3A4D39]">Deadline</p>
                        <p className="text-sm text-[#3A4D39]/70">{formatDate(commission.deadline)}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <CalendarDays className="h-4 w-4 text-[#154930]" />
                      <div>
                        <p className="text-sm font-medium text-[#3A4D39]">Ordered</p>
                        <p className="text-sm text-[#3A4D39]/70">{formatDate(commission.createdAt)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  {commission.additionalInfo && (
                    <div className="bg-[#ECE3CE]/30 rounded-lg p-4 mb-4">
                      <p className="text-sm font-medium text-[#3A4D39] mb-1">Additional Information</p>
                      <p className="text-sm text-[#3A4D39]/80">{commission.additionalInfo}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#154930]/10">
                    <div className="flex items-center space-x-2">
                      <ImageIcon className="h-4 w-4 text-[#154930]" />
                      <span className="text-sm text-[#3A4D39]">Reference Image</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => window.open(commission.portraitImage, "_blank")}
                        className="px-4 py-2 border border-[#154930]/20 text-[#154930] hover:bg-[#154930]/5 bg-transparent rounded-lg text-sm font-medium transition-colors"
                      >
                        View Image
                      </button>
                      <button className="px-4 py-2 bg-[#154930] hover:bg-[#154930]/90 text-[#ECE3CE] rounded-lg text-sm font-medium transition-colors">
                        Contact Client
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default ManageOrders
