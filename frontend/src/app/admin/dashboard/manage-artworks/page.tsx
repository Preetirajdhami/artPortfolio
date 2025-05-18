"use client";
import React, { useState } from "react";
// import axios from "axios";

const Gallery = () => {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    medium: "",
    price: 0,
    category: "",
  });

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const data = new FormData();
    data.append("image", file);
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("medium", formData.medium);
    data.append("price", formData.price.toString());
    data.append("category", formData.category);

    // try {
    //   const response = await axios.post("http://localhost:8000/api/gallery/upload", data,
    //     {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     }
    //   );
    //   alert("Image uploaded successfully!");
    //   // Handle the image data as needed
    // } catch (error) {
    //   console.error("Error uploading image:", error);
    //   alert("Error uploading image.");
    // }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Gallery</h1>

      {/* Image Upload Form */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload Artwork</h2>
        <form onSubmit={handleUpload} encType="multipart/form-data">
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="mb-4 p-2"
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
          />
          <input
            type="text"
            name="medium"
            placeholder="Medium"
            value={formData.medium}
            onChange={handleInputChange}
            className="mb-4 p-2 w-full"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
            className="mb-4 p-2 w-full"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
            className="mb-4 p-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded"
          >
            Upload Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default Gallery;