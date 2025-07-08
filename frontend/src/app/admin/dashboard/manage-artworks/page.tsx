"use client";
import React, { useState } from "react";
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

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append("image", file); 
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("medium", formData.medium);
      data.append("price", formData.price.toString());
      data.append("category", formData.category);

      const response = await axios.post(
        "http://localhost:8000/api/gallery/upload", 
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Image uploaded successfully!");
      console.log("Uploaded image:", response.data.image);
      // Optional: Clear the form
      setFile(null);
      setFormData({
        title: "",
        description: "",
        medium: "",
        price: 0,
        category: "",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
        alert(error.response?.data?.message || "Upload failed.");
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <AdminLayout>

      <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Gallery</h1>

      {/* Image Upload Form */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload Artwork</h2>
        <form onSubmit={handleUpload} encType="multipart/form-data">
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="mb-4 p-2 w-full"
            required
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
            className="bg-blue-600 text-white p-3 rounded w-full"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        </form>
      </div>
    </div>
    </AdminLayout>
    
  );
};

export default Gallery;
