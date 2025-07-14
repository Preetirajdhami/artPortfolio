"use client"
import type React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import type { AxiosResponse } from "axios"
import Image from "next/image"
import AdminSidebar from "../../../components/Dashboard/sidebar"
import {
  Upload,
  ImageIcon,
  Loader2,
  Plus,
  Pencil,
  Trash2,
  X,
  Replace,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react"

interface AlertState {
  isOpen: boolean
  type: "confirm" | "success" | "error"
  title: string
  message: string
  onConfirm?: () => void
  onCancel?: () => void
}

const Gallery = () => {
  const [file, setFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
  })
  const [loading, setLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<{
    show: boolean
    artwork: Artwork | null
  }>({
    show: false,
    artwork: null,
  })
  const [deleting, setDeleting] = useState(false)
  const [alert, setAlert] = useState<AlertState>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  })

  type Artwork = {
    _id: string
    url: string
    title: string
    category: string
  }

  const [artworks, setArtworks] = useState<Artwork[]>([])

  const showAlert = (alertConfig: Omit<AlertState, "isOpen">) => {
    setAlert({ ...alertConfig, isOpen: true })
  }

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, isOpen: false }))
  }

  // Fetch all artworks on page load
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get("https://artportfolio-backend.onrender.com/api/gallery")
        setArtworks(response.data)
      } catch (error) {
        console.error("Failed to fetch artworks", error)
        showAlert({
          type: "error",
          title: "Load Failed",
          message: "Failed to load artworks. Please refresh the page.",
          onConfirm: hideAlert,
        })
      }
    }

    fetchArtworks()
  }, [])

  // Create image preview when file is selected
  useEffect(() => {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
  }, [file])

  // Show delete confirmation
  const handleDeleteClick = (artwork: Artwork) => {
    setDeleteConfirm({ show: true, artwork })
  }

  // Cancel delete
  const handleDeleteCancel = () => {
    setDeleteConfirm({ show: false, artwork: null })
  }

  // Confirm delete
  const handleDeleteConfirm = async () => {
    if (!deleteConfirm.artwork) return

    try {
      setDeleting(true)
      await axios.delete(`https://artportfolio-backend.onrender.com/api/gallery/${deleteConfirm.artwork._id}`)
      setArtworks((prev) => prev.filter((art) => art._id !== deleteConfirm.artwork!._id))
      setDeleteConfirm({ show: false, artwork: null })
      showAlert({
        type: "success",
        title: "Artwork Deleted",
        message: "The artwork has been successfully deleted.",
        onConfirm: hideAlert,
      })
    } catch (error) {
      console.error("Delete failed", error)
      showAlert({
        type: "error",
        title: "Delete Failed",
        message: "Failed to delete artwork. Please try again.",
        onConfirm: hideAlert,
      })
    } finally {
      setDeleting(false)
    }
  }

  // Open edit form with artwork data
  const handleEdit = (artwork: Artwork) => {
    setEditingArtwork(artwork)
    setFormData({
      title: artwork.title,
      category: artwork.category,
    })
    setFile(null)
    setImagePreview(null)
    setShowUploadForm(true)
  }

  // Remove selected image (but keep editing mode)
  const handleRemoveSelectedImage = () => {
    setFile(null)
    setImagePreview(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Validate file type
      if (!selectedFile.type.startsWith("image/")) {
        showAlert({
          type: "error",
          title: "Invalid File",
          message: "Please select a valid image file (PNG, JPG, GIF, etc.)",
          onConfirm: hideAlert,
        })
        return
      }

      // Validate file size (10MB limit)
      if (selectedFile.size > 10 * 1024 * 1024) {
        showAlert({
          type: "error",
          title: "File Too Large",
          message: "File size must be less than 10MB",
          onConfirm: hideAlert,
        })
        return
      }

      setFile(selectedFile)
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

    const droppedFile = e.dataTransfer.files?.[0]
    if (droppedFile) {
      // Validate file type
      if (!droppedFile.type.startsWith("image/")) {
        showAlert({
          type: "error",
          title: "Invalid File",
          message: "Please select a valid image file (PNG, JPG, GIF, etc.)",
          onConfirm: hideAlert,
        })
        return
      }

      // Validate file size (10MB limit)
      if (droppedFile.size > 10 * 1024 * 1024) {
        showAlert({
          type: "error",
          title: "File Too Large",
          message: "File size must be less than 10MB",
          onConfirm: hideAlert,
        })
        return
      }

      setFile(droppedFile)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const closeForm = () => {
    setShowUploadForm(false)
    setEditingArtwork(null)
    setFile(null)
    setImagePreview(null)
    setFormData({
      title: "",
      category: "",
    })
  }

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!file && !editingArtwork) {
      showAlert({
        type: "error",
        title: "Missing Image",
        message: "Please select a file to upload.",
        onConfirm: hideAlert,
      })
      return
    }

    if (!formData.title.trim()) {
      showAlert({
        type: "error",
        title: "Missing Title",
        message: "Please enter a title for your artwork.",
        onConfirm: hideAlert,
      })
      return
    }

    if (!formData.category) {
      showAlert({
        type: "error",
        title: "Missing Category",
        message: "Please select a category for your artwork.",
        onConfirm: hideAlert,
      })
      return
    }

    try {
      setLoading(true)
      const data = new FormData()

      // Only append image if a new file is selected
      if (file) {
        data.append("image", file)
      }
      data.append("title", formData.title.trim())
      data.append("category", formData.category)

      let response: AxiosResponse<Artwork>

      if (editingArtwork) {
        // Update existing artwork
        response = await axios.put<Artwork>(
          `https://artportfolio-backend.onrender.com/api/gallery/${editingArtwork._id}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        )
        // Update the artwork in the state
        setArtworks((prev) => prev.map((art) => (art._id === editingArtwork._id ? response.data : art)))

        showAlert({
          type: "success",
          title: "Artwork Updated",
          message: "Your artwork has been successfully updated!",
          onConfirm: () => {
            hideAlert()
            closeForm()
          },
        })
      } else {
        // Create new artwork
        response = await axios.post<Artwork>("https://artportfolio-backend.onrender.com/api/gallery/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        // Add the new artwork to the state
        setArtworks((prev) => [...prev, response.data])

        showAlert({
          type: "success",
          title: "Artwork Uploaded",
          message: "Your artwork has been successfully uploaded!",
          onConfirm: () => {
            hideAlert()
            closeForm()
          },
        })
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data)
        showAlert({
          type: "error",
          title: editingArtwork ? "Update Failed" : "Upload Failed",
          message: error.response?.data?.message || "Operation failed. Please try again.",
          onConfirm: hideAlert,
        })
      } else {
        console.error("Unexpected error:", error)
        showAlert({
          type: "error",
          title: "Unexpected Error",
          message: "An unexpected error occurred. Please try again.",
          onConfirm: hideAlert,
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const CustomAlert = () => {
    if (!alert.isOpen) return null

    // For confirmation dialog (delete), use the gallery-style layout
    if (alert.type === "confirm") {
      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3A4D39]">{alert.title}</h3>
                  <p className="text-[#3A4D39]/70 text-sm">This action cannot be undone</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-[#3A4D39]">{alert.message}</p>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={alert.onCancel}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#3A4D39] font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={alert.onConfirm}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // For success/error messages, use the toast-style layout
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
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Custom Alert Component */}
          <CustomAlert />

          {/* Delete Confirmation Modal */}
          {deleteConfirm.show && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#3A4D39]">Delete Artwork</h3>
                      <p className="text-[#3A4D39]/70 text-sm">This action cannot be undone</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-[#3A4D39] mb-3">
                      Are you sure you want to delete <strong>&quot;{deleteConfirm.artwork?.title}&quot;</strong>?
                    </p>

                    {deleteConfirm.artwork && (
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="relative w-12 h-12 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                          <Image
                            src={deleteConfirm.artwork.url || "/placeholder.svg"}
                            alt={deleteConfirm.artwork.title}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-[#3A4D39] truncate">{deleteConfirm.artwork.title}</p>
                          <p className="text-sm text-[#3A4D39]/60">{deleteConfirm.artwork.category}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={handleDeleteCancel}
                      disabled={deleting}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#3A4D39] font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDeleteConfirm}
                      disabled={deleting}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
                    >
                      {deleting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Deleting...
                        </>
                      ) : (
                        <>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Header with Upload Button */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#3A4D39] mb-2">Gallery Management</h1>
              <p className="text-[#3A4D39]/70">Upload and manage your artwork collection</p>
            </div>
            <button
              onClick={() => setShowUploadForm(true)}
              className="bg-[#154930] hover:bg-[#154930]/90 text-[#ECE3CE] font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
            >
              <Plus className="mr-2 h-5 w-5" />
              Upload Artwork
            </button>
          </div>

          {/* Modal Overlay */}
          {showUploadForm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="flex items-center text-xl font-semibold text-[#3A4D39] mb-2">
                        <Plus className="mr-2 h-5 w-5" />
                        {editingArtwork ? "Edit Artwork" : "Add New Artwork"}
                      </h2>
                      <p className="text-[#3A4D39]/60">
                        {editingArtwork
                          ? "Update your artwork details"
                          : "Upload a new piece to your gallery collection"}
                      </p>
                    </div>
                    <button onClick={closeForm} className="text-[#3A4D39]/60 hover:text-[#3A4D39] transition-colors">
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <form onSubmit={handleUpload} className="space-y-6">
                    {/* Image Upload/Display Area */}
                    <div className="space-y-2">
                      <label className="block text-[#3A4D39] font-medium text-sm">Artwork Image</label>

                      {/* Show image preview or existing image */}
                      {(imagePreview || (editingArtwork && !file)) && (
                        <div className="mb-4">
                          <div className="relative w-full max-w-md mx-auto bg-gray-50 rounded-lg overflow-hidden">
                            <div className="relative w-full h-64">
                              <Image
                                src={imagePreview || editingArtwork?.url || "/placeholder.svg" || "/placeholder.svg"}
                                alt="Preview"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          </div>

                          {editingArtwork && !file && (
                            <div className="flex justify-center space-x-3 mt-4">
                              <label className="bg-[#154930] hover:bg-[#154930]/90 text-[#ECE3CE] font-medium py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer flex items-center">
                                <Replace className="mr-2 h-4 w-4" />
                                Replace Image
                                <input type="file" onChange={handleFileChange} className="hidden" accept="image/*" />
                              </label>
                            </div>
                          )}

                          {file && (
                            <div className="flex justify-center mt-4">
                              <button
                                type="button"
                                onClick={handleRemoveSelectedImage}
                                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center"
                              >
                                <X className="mr-2 h-4 w-4" />
                                Remove Selected Image
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      {/* File upload area - only show if no image is selected/shown */}
                      {!imagePreview && !(editingArtwork && !file) && (
                        <div
                          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                            dragActive
                              ? "border-[#154930] bg-[#154930]/5"
                              : "border-[#154930]/30 hover:border-[#154930]/50"
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
                            required={!editingArtwork}
                          />
                          <div className="space-y-4">
                            <Upload className="h-12 w-12 text-[#154930]/50 mx-auto" />
                            <div>
                              <p className="text-[#3A4D39] font-medium">Drop your image here, or click to browse</p>
                              <p className="text-sm text-[#3A4D39]/60 mt-1">PNG, JPG, GIF up to 10MB</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="title" className="block text-[#3A4D39] font-medium text-sm">
                          Title *
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
                        <label htmlFor="category" className="block text-[#3A4D39] font-medium text-sm">
                          Category *
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
                          <option value="Graphite & Charcoal">Graphite</option>
                          <option value="Watercolor">Watercolor</option>
                          <option value="Acrylic">Acrylic</option>
                          <option value="Pastel">Pastel</option>
                        </select>
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
                          {editingArtwork ? "Updating..." : "Uploading..."}
                        </>
                      ) : (
                        <>
                          <Upload className="mr-2 h-4 w-4" />
                          {editingArtwork ? "Update Artwork" : "Upload Artwork"}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Artwork List */}
          <div>
            <h2 className="text-2xl font-semibold text-[#3A4D39] mb-6">Your Artworks ({artworks.length})</h2>

            {artworks.length === 0 ? (
              <div className="text-center py-12">
                <ImageIcon className="h-16 w-16 text-[#3A4D39]/30 mx-auto mb-4" />
                <p className="text-[#3A4D39]/60 text-lg">No artworks uploaded yet</p>
                <p className="text-[#3A4D39]/50 text-sm">Click &quot;Upload Artwork&quot; to add your first piece</p>
              </div>
            ) : (
              <div className="space-y-4">
                {artworks.map((art) => (
                  <div
                    key={art._id}
                    className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 p-4"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Artwork Image */}
                      <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                        <Image
                          src={art.url || "/placeholder.svg"}
                          alt={art.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Artwork Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-[#3A4D39] truncate">{art.title}</h3>
                        <span className="inline-block bg-[#154930]/10 text-[#154930] text-sm px-3 py-1 rounded-full font-medium mt-1">
                          {art.category}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2 flex-shrink-0">
                        <button
                          onClick={() => handleEdit(art)}
                          className="bg-[#154930]/10 hover:bg-[#154930]/20 text-[#154930] p-2 rounded-lg transition-colors"
                          title="Edit artwork"
                        >
                          <Pencil className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(art)}
                          className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg transition-colors"
                          title="Delete artwork"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Gallery
