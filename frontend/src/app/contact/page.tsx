"use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
import { CheckCircle, XCircle, X } from "lucide-react"

interface AlertState {
  isOpen: boolean
  type: "success" | "error"
  title: string
  message: string
  onConfirm?: () => void
}

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<AlertState>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  })

  const showAlert = (alertConfig: Omit<AlertState, "isOpen">) => {
    setAlert({ ...alertConfig, isOpen: true })
  }

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, isOpen: false }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post("https://artportfolio-backend.onrender.com/api/contact", formData)

      showAlert({
        type: "success",
        title: "Message Sent",
        message: "Your message has been sent successfully! We'll get back to you soon.",
        onConfirm: () => {
          hideAlert()
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          })
        },
      })
    } catch (err) {
      console.error(err)
      showAlert({
        type: "error",
        title: "Send Failed",
        message: "Failed to send your message. Please check your connection and try again.",
        onConfirm: hideAlert,
      })
    } finally {
      setLoading(false)
    }
  }

  const CustomAlert = () => {
    if (!alert.isOpen) return null

    return (
      <div className="fixed top-4 right-4 z-[60] max-w-md">
        <div
          className={`${
            alert.type === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
          } border rounded-lg p-4 mb-4 flex items-start space-x-3`}
        >
          {alert.type === "success" ? (
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          ) : (
            <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className={`${alert.type === "success" ? "text-green-800" : "text-red-800"} font-medium`}>
              {alert.title}
            </p>
            <p className={`${alert.type === "success" ? "text-green-700" : "text-red-700"} text-sm`}>{alert.message}</p>
          </div>
          <button
            onClick={alert.onConfirm}
            className={`${
              alert.type === "success" ? "text-green-400 hover:text-green-600" : "text-red-400 hover:text-red-600"
            }`}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-base">
      {/* Custom Alert Component */}
      <CustomAlert />

      <div className="relative h-screen w-full">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/contact.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Contact</h1>
          <p className="text-xl md:text-2xl mt-4">Get in Touch with Preeti Arts</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-primary">
          <div>
            <h2 className="text-3xl font-bold mb-6">CONTACT</h2>
            <p className="text-lg mb-6 text-justify">
              Preeti Arts appreciates hearing from people all over the world who enjoy her work and welcomes any
              questions or enquiries.
            </p>

            <p className="text-lg text-justify">
              Availability of original work can be found in each item&apos;s description in the gallery section. If you
              are interested in a particular original, or something you&apos;ve seen on Preeti Arts&apos;s social media,
              please reach out for more information.
            </p>
            <br />

            <p className="text-lg text-justify">
              Commission information can be found on the commission page. If you have a question concerning commissions
              that is not answered here, please don&apos;t hesitate to ask.
            </p>
            <br />

            <p className="text-lg text-justify">
              Follow Preeti Arts on{" "}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAC0A3] underline hover:text-gray-700"
              >
                Facebook
              </a>{" "}
              and{" "}
              <a
                href="https://www.instagram.com/_preetiarts?igsh=b3l5dHM4aWZvZmVu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAC0A3] underline hover:text-gray-700"
              >
                Instagram
              </a>{" "}
              to keep up-to-date with works-in-progress, insights into her creative process and advocacy work.
            </p>
            <br />
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg mb-2">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAC0A3]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg mb-2">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAC0A3]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAC0A3]"
                  required
                />
              </div>

              <div>
                <label className="block text-lg mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAC0A3]"
                  required
                />
              </div>

              <div>
                <label className="block text-lg mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAC0A3] h-48"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-4 px-8 rounded-lg hover:bg-[#c5ab8f] transition-colors text-lg font-semibold"
              >
                {loading ? "Sending..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
