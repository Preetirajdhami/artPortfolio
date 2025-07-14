"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import AdminSidebar from "../../../components/Dashboard/sidebar"
import {
  Mail,
  Calendar,
  MessageSquare,
  Search,
  Filter,
  Reply,
  Archive,
  Trash2,
  Clock,
  Loader2,
} from "lucide-react"

interface ContactMessage {
  _id: string
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  createdAt: string
}

const ManageContacts = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("https://artportfolio-backend.onrender.com/api/contact")
        setMessages(response.data)
        setFilteredMessages(response.data)
      } catch (error) {
        console.error("Error fetching contact messages:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [])

  useEffect(() => {
    const filtered = messages.filter(
      (message) =>
        message.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        message.message.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredMessages(filtered)
  }, [searchTerm, messages])

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this message?")
    if (!confirmDelete) return

    try {
      await axios.delete(`https://artportfolio-backend.onrender.com/api/contact/${id}`)
      alert("Message deleted successfully")
      setMessages((prev) => prev.filter((msg) => msg._id !== id))
      setSelectedMessage(null)
    } catch (error) {
      console.error("Failed to delete message:", error)
      alert("Failed to delete message")
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      date: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
  }

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const handleReply = (email: string) => {
    window.location.href = `mailto:${email}`
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#3A4D39] mb-2">Contact Messages</h1>
            <p className="text-[#3A4D39]/70">Manage and respond to client inquiries</p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-[#3A4D39]/50" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[#154930]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154930] focus:border-[#154930] text-[#3A4D39] placeholder-[#3A4D39]/50"
                />
              </div>
              <div className="flex gap-2">
                <button className="flex items-center px-4 py-3 border border-[#154930]/20 text-[#154930] hover:bg-[#154930]/5 rounded-lg font-medium transition-colors">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-3 bg-[#154930] hover:bg-[#154930]/90 text-[#ECE3CE] rounded-lg font-medium transition-colors">
                  <Archive className="h-4 w-4 mr-2" />
                  Archive All Read
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-[#154930]" />
              <span className="ml-2 text-[#3A4D39]">Loading messages...</span>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-12 text-center">
              {searchTerm ? (
                <>
                  <Search className="h-16 w-16 text-[#154930]/30 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-[#3A4D39] mb-2">No messages found</h3>
                  <p className="text-[#3A4D39]/60">Try adjusting your search terms</p>
                </>
              ) : (
                <>
                  <MessageSquare className="h-16 w-16 text-[#154930]/30 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-[#3A4D39] mb-2">No Messages Yet</h3>
                  <p className="text-[#3A4D39]/60">When clients send messages, they will appear here.</p>
                </>
              )}
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredMessages.map((message) => {
                const { date, time } = formatDate(message.createdAt)
                return (
                  <div
                    key={message._id}
                    className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 p-6 cursor-pointer"
                    onClick={() => setSelectedMessage(message)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-[#154930] text-[#ECE3CE] rounded-full flex items-center justify-center font-semibold">
                          {getInitials(message.firstName, message.lastName)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#3A4D39]">
                            {message.firstName} {message.lastName}
                          </h3>
                          <div className="flex items-center mt-1 text-[#3A4D39]/70">
                            <Mail className="h-4 w-4 mr-1" />
                            <span className="text-sm">{message.email}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-[#3A4D39]/70 text-sm mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {date}
                        </div>
                        <div className="flex items-center text-[#3A4D39]/70 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {time}
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="mb-4">
                      <h4 className="text-[#3A4D39] font-medium text-lg mb-2">{message.subject}</h4>
                      <p className="text-[#3A4D39]/80 line-clamp-3">{message.message}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#154930]/10">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4 text-[#154930]" />
                        <span className="text-sm text-[#3A4D39]">
                          {message.message.length > 100 ? "Long message" : "Short message"}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleReply(message.email)
                          }}
                          className="flex items-center px-4 py-2 bg-[#154930] hover:bg-[#154930]/90 text-[#ECE3CE] rounded-lg text-sm font-medium transition-colors"
                        >
                          <Reply className="h-4 w-4 mr-1" />
                          Reply
                        </button>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center px-4 py-2 border border-[#154930]/20 text-[#154930] hover:bg-[#154930]/5 rounded-lg text-sm font-medium transition-colors"
                        >
                          <Archive className="h-4 w-4 mr-1" />
                          Archive
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDelete(message._id)
                          }}
                          className="flex items-center px-3 py-2 border border-red-200 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Modal */}
          {selectedMessage && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-[#3A4D39]">Message Details</h2>
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="text-[#3A4D39]/60 hover:text-[#3A4D39] text-2xl"
                    >
                      ×
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-16 w-16 bg-[#154930] text-[#ECE3CE] rounded-full flex items-center justify-center font-semibold text-lg">
                      {getInitials(selectedMessage.firstName, selectedMessage.lastName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#3A4D39]">
                        {selectedMessage.firstName} {selectedMessage.lastName}
                      </h3>
                      <p className="text-[#3A4D39]/70">{selectedMessage.email}</p>
                      <p className="text-[#3A4D39]/60 text-sm">
                        {formatDate(selectedMessage.createdAt).date} at{" "}
                        {formatDate(selectedMessage.createdAt).time}
                      </p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-[#3A4D39] font-medium text-lg mb-3">{selectedMessage.subject}</h4>
                    <div className="bg-[#ECE3CE]/30 rounded-lg p-4">
                      <p className="text-[#3A4D39] whitespace-pre-wrap">{selectedMessage.message}</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleReply(selectedMessage.email)}
                      className="flex items-center px-6 py-3 bg-[#154930] hover:bg-[#154930]/90 text-[#ECE3CE] rounded-lg font-medium transition-colors"
                    >
                      <Reply className="h-4 w-4 mr-2" />
                      Reply
                    </button>
                    <button className="flex items-center px-6 py-3 border border-[#154930]/20 text-[#154930] hover:bg-[#154930]/5 rounded-lg font-medium transition-colors">
                      <Archive className="h-4 w-4 mr-2" />
                      Archive
                    </button>
                    <button
                      onClick={() => handleDelete(selectedMessage._id)}
                      className="flex items-center px-6 py-3 border border-red-200 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default ManageContacts
