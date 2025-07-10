"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Palette, Loader2, Mail, Lock } from "lucide-react"

const AdminLogin = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post("https://artportfolio-backend.onrender.com/api/admin/login", formData)

      localStorage.setItem("adminToken", res.data.token)
      router.push("/admin/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      alert("Invalid credentials")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#ECE3CE] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#154930] rounded-full mb-4">
            <Palette className="h-8 w-8 text-[#ECE3CE]" />
          </div>
          <h1 className="text-3xl font-bold text-[#3A4D39] mb-2">Welcome Back</h1>
          <p className="text-[#3A4D39]/70">Sign in to your admin dashboard</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-[#3A4D39] mb-2">Admin Login</h2>
            <p className="text-[#3A4D39]/60">Enter your credentials to access the dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[#3A4D39] font-medium text-sm">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-[#3A4D39]/50" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="admin@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-[#154930]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154930] focus:border-[#154930] bg-white/50 text-[#3A4D39] placeholder-[#3A4D39]/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-[#3A4D39] font-medium text-sm">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-[#3A4D39]/50" />
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-[#154930]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154930] focus:border-[#154930] bg-white/50 text-[#3A4D39] placeholder-[#3A4D39]/50"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#154930] hover:bg-[#154930]/90 text-[#ECE3CE] font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-[#3A4D39]/60">Art Portfolio Admin Dashboard</p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
