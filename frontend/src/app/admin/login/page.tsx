"use client"
import type React from "react"
import { useState } from "react"
import axios, { AxiosError } from "axios" 
import { useRouter } from "next/navigation"
import { Palette, Loader2, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, X } from "lucide-react"

interface Alert {
  id: string
  type: "error" | "success" | "warning"
  title: string
  message: string
}

const AdminLogin = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [alerts, setAlerts] = useState<Alert[]>([])

  const showAlert = (type: Alert["type"], title: string, message: string) => {
    const id = Date.now().toString()
    const newAlert: Alert = { id, type, title, message }
    setAlerts((prev) => [...prev, newAlert])

    // Auto remove after 5 seconds
    setTimeout(() => {
      removeAlert(id)
    }, 5000)
  }

  const removeAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const getErrorMessage = (error: AxiosError) => {
    if (error.response) {
      // Server responded with error status
      const status = error.response.status
      const data = error.response.data
      const message =
        data && typeof data === "object"
          ? (data as { message?: string; error?: string }).message || (data as { message?: string; error?: string }).error
          : undefined

      switch (status) {
        case 401:
          return {
            title: "Invalid Credentials",
            message: "The email or password you entered is incorrect. Please try again.",
          }
        case 403:
          return {
            title: "Access Denied",
            message: "You don't have permission to access the admin dashboard.",
          }
        case 404:
          return {
            title: "Service Not Found",
            message: "The login service is currently unavailable. Please try again later.",
          }
        case 429:
          return {
            title: "Too Many Attempts",
            message: "Too many login attempts. Please wait a few minutes before trying again.",
          }
        case 500:
          return {
            title: "Server Error",
            message: "Internal server error. Please try again later.",
          }
        default:
          return {
            title: "Login Failed",
            message: message || "An unexpected error occurred. Please try again.",
          }
      }
    } else if (error.request) {
      // Network error
      return {
        title: "Connection Error",
        message: "Unable to connect to the server. Please check your internet connection.",
      }
    } else {
      // Other error
      return {
        title: "Login Failed",
        message: "An unexpected error occurred. Please try again.",
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post("https://artportfolio-backend.onrender.com/api/admin/login", formData, {
        timeout: 10000, 
      })

      localStorage.setItem("adminToken", res.data.token)
      showAlert("success", "Login Successful", "Welcome back! Redirecting to dashboard...")


      setTimeout(() => {
        router.push("/admin/dashboard")
      }, 1500)
    } catch (error: unknown) { 
      console.error("Login failed:", error)
      if (axios.isAxiosError(error)) {
        const { title, message } = getErrorMessage(error)
        showAlert("error", title, message)
      } else {
        showAlert("error", "Login Failed", "An unexpected error occurred. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const AlertComponent = ({ alert }: { alert: Alert }) => {
    const getAlertStyles = () => {
      switch (alert.type) {
        case "error":
          return {
            bg: "bg-red-50 border-red-200",
            icon: <AlertCircle className="h-5 w-5 text-red-500" />,
            title: "text-red-800",
            message: "text-red-600",
          }
        case "success":
          return {
            bg: "bg-green-50 border-green-200",
            icon: <CheckCircle className="h-5 w-5 text-green-500" />,
            title: "text-green-800",
            message: "text-green-600",
          }
        case "warning":
          return {
            bg: "bg-yellow-50 border-yellow-200",
            icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
            title: "text-yellow-800",
            message: "text-yellow-600",
          }
        default:
          return {
            bg: "bg-gray-50 border-gray-200",
            icon: <AlertCircle className="h-5 w-5 text-gray-500" />,
            title: "text-gray-800",
            message: "text-gray-600",
          }
      }
    }

    const styles = getAlertStyles()

    return (
      <div className={`${styles.bg} border rounded-lg p-4 shadow-lg animate-in slide-in-from-top-2 duration-300`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">{styles.icon}</div>
          <div className="ml-3 flex-1">
            <h3 className={`text-sm font-medium ${styles.title}`}>{alert.title}</h3>
            <p className={`mt-1 text-sm ${styles.message}`}>{alert.message}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={() => removeAlert(alert.id)}
              className={`inline-flex rounded-md p-1.5 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                alert.type === "error"
                  ? "focus:ring-red-500"
                  : alert.type === "success"
                    ? "focus:ring-green-500"
                    : "focus:ring-yellow-500"
              }`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#ECE3CE] flex items-center justify-center p-4">
      {/* Alert Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md w-full">
        {alerts.map((alert) => (
          <AlertComponent key={alert.id} alert={alert} />
        ))}
      </div>

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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-10 py-3 border border-[#154930]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154930] focus:border-[#154930] bg-white/50 text-[#3A4D39] placeholder-[#3A4D39]/50"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 h-4 w-4 text-[#3A4D39]/50 hover:text-[#3A4D39] focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
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