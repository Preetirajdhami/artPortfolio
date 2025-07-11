"use client"
import type React from "react"
import { useState } from "react"
import axios from "axios"
import AdminSidebar from "../../../components/Dashboard/sidebar"
import { Upload, ImageIcon, Loader2, Plus } from "lucide-react"

const Gallery = () => {
  const [file, setFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    medium: "",
    price: 0,
    category: "",
  })
  const [loading, setLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number.parseFloat(value) || 0 : value,
    }))
  }

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!file) {
      alert("Please select a file to upload.")
      return
    }

    try {
      setLoading(true)
      const data = new FormData()
      data.append("image", file)
      data.append("title", formData.title)
      data.append("description", formData.description)
      data.append("medium", formData.medium)
      data.append("price", formData.price.toString())
      data.append("category", formData.category)

      const response = await axios.post("https://artportfolio-backend.onrender.com/api/gallery/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log("Upload response:", response.data);
      alert("Artwork uploaded successfully!")
      setFile(null)
      setFormData({
        title: "",
        description: "",
        medium: "",
        price: 0,
        category: "",
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data)
        alert(error.response?.data?.message || "Upload failed.")
      } else {
        console.error("Unexpected error:", error)
        alert("An unexpected error occurred.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#3A4D39] mb-2">Gallery Management</h1>
            <p className="text-[#3A4D39]/70">Upload and manage your artwork collection</p>
          </div>

          {/* Upload Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
            <div className="mb-6">
              <h2 className="flex items-center text-xl font-semibold text-[#3A4D39] mb-2">
                <Plus className="mr-2 h-5 w-5" />
                Add New Artwork
              </h2>
              <p className="text-[#3A4D39]/60">Upload a new piece to your gallery collection</p>
            </div>

            <form onSubmit={handleUpload} className="space-y-6">
              {/* File Upload Area */}
              <div className="space-y-2">
                <label className="block text-[#3A4D39] font-medium text-sm">Artwork Image</label>
                <div
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive ? "border-[#154930] bg-[#154930]/5" : "border-[#154930]/30 hover:border-[#154930]/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                    required
                  />
                  <div className="space-y-4">
                    {file ? (
                      <div className="flex items-center justify-center space-x-2">
                        <ImageIcon className="h-8 w-8 text-[#154930]" />
                        <span className="text-[#3A4D39] font-medium">{file.name}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-12 w-12 text-[#154930]/50 mx-auto" />
                        <div>
                          <p className="text-[#3A4D39] font-medium">Drop your image here, or click to browse</p>
                          <p className="text-sm text-[#3A4D39]/60 mt-1">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-[#3A4D39] font-medium text-sm">
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Enter artwork title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#154930]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154930] focus:border-[#154930] text-[#3A4D39] placeholder-[#3A4D39]/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="medium" className="block text-[#3A4D39] font-medium text-sm">
                    Medium
                  </label>
                  <input
                    id="medium"
                    name="medium"
                    type="text"
                    placeholder="e.g., Oil on canvas"
                    value={formData.medium}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#154930]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154930] focus:border-[#154930] text-[#3A4D39] placeholder-[#3A4D39]/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="price" className="block text-[#3A4D39] font-medium text-sm">
                    Price ($)
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#154930]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154930] focus:border-[#154930] text-[#3A4D39] placeholder-[#3A4D39]/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="category" className="block text-[#3A4D39] font-medium text-sm">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#154930]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154930] focus:border-[#154930] text-[#3A4D39] bg-white"
                  >
                    <option value="">Select category</option>
                    <option value="Graphite">Graphite</option>
                    <option value="Watercolor">Watercolor</option>
                    <option value="Acrylic">Acrylic</option>
                    <option value="Pastel">Pastel</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="block text-[#3A4D39] font-medium text-sm">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe your artwork..."
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#154930]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#154930] focus:border-[#154930] text-[#3A4D39] placeholder-[#3A4D39]/50 resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#154930] hover:bg-[#154930]/90 text-[#ECE3CE] font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Artwork
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Gallery
