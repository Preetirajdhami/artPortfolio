"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../adminLayout";

const Gallery = () => {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    medium: "",
    price: 0,
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [galleryImages, setGalleryImages] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  // Fetch all gallery images
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get("https://artportfolio-backend.onrender.com/api/gallery");
        setGalleryImages(res.data);
      } catch (error) {
        console.error("Failed to load gallery:", error);
      }
    };
    fetchGallery();
  }, []);

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle upload or update
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.title || !formData.medium || !formData.price || !formData.category) {
      alert("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("medium", formData.medium);
      data.append("price", formData.price.toString());
      data.append("category", formData.category);

      if (file) data.append("image", file);

      if (editId) {
        // Update existing
        const res = await axios.put(
          `https://artportfolio-backend.onrender.com/api/gallery/${editId}`,
          formData
        );
        alert("Image updated!");
        setEditId(null);
      } else {
        // New upload
        const res = await axios.post(
          "https://artportfolio-backend.onrender.com/api/gallery/upload",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert("Image uploaded!");
      }

      // Refresh gallery
      const res = await axios.get("https://artportfolio-backend.onrender.com/api/gallery");
      setGalleryImages(res.data);

      // Reset form
      setFile(null);
      setFormData({
        title: "",
        description: "",
        medium: "",
        price: 0,
        category: "",
      });
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  // Delete image
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://artportfolio-backend.onrender.com/api/gallery/${id}`);
      setGalleryImages((prev) => prev.filter((img) => img._id !== id));
      alert("Image deleted!");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete image.");
    }
  };

  // Prefill form for editing
  const handleEdit = (image: any) => {
    setFormData({
      title: image.title,
      description: image.description,
      medium: image.medium,
      price: image.price,
      category: image.category,
    });
    setEditId(image._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AdminLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center mb-8">Gallery Dashboard</h1>

        {/* Upload Form */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{editId ? "Edit Artwork" : "Upload Artwork"}</h2>
          <form onSubmit={handleUpload} encType="multipart/form-data">
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="mb-4 p-2 w-full"
              disabled={!!editId} // Prevent image change on edit
              required={!editId} // Only required on upload
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="mb-4 p-2 w-full"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="mb-4 p-2 w-full"
              rows={3}
            />
            <input
              type="text"
              name="medium"
              placeholder="Medium"
              value={formData.medium}
              onChange={handleInputChange}
              className="mb-4 p-2 w-full"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              className="mb-4 p-2 w-full"
              required
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="mb-4 p-2 w-full"
              required
            >
              <option value="">Select Category</option>
              <option value="Graphite">Graphite</option>
              <option value="Watercolor">Watercolor</option>
              <option value="Acrylic">Acrylic</option>
              <option value="Pastel">Pastel</option>
            </select>
            <button
              type="submit"
              className="bg-primary text-white p-3 rounded w-full"
              disabled={loading}
            >
              {loading ? (editId ? "Updating..." : "Uploading...") : editId ? "Update Image" : "Upload Image"}
            </button>
          </form>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {galleryImages.map((image) => (
            <div key={image._id} className="border p-4 rounded shadow">
              <img src={image.url} alt={image.title} className="w-full h-64 object-cover mb-2 rounded" />
              <h3 className="text-xl font-semibold">{image.title}</h3>
              <p>{image.description}</p>
              <p className="text-sm text-gray-600">Medium: {image.medium}</p>
              <p className="text-sm text-gray-600">Category: {image.category}</p>
              <p className="font-bold mt-2">${image.price}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(image)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(image._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Gallery;
