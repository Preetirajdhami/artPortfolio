import GalleryModel from "../models/Gallery.js"; 
import cloudinary from 'cloudinary';

class GalleryController {
    // Upload Image
    static async uploadImage(req, res) {
        try {
            console.log("Upload API hit");
            console.log("Request body:", req.body);
            console.log("File details:", req.file);
    
            if (!req.file) {
                console.error("Error: No image file found.");
                return res.status(400).json({ error: "Image is required" });
            }
    
            // Upload image to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);
            console.log("Cloudinary Upload Result:", result);
    
            const { title, description, medium, price, category } = req.body;
    
            // Validate required fields
            if (!title || !medium || !req.file) {
                return res.status(400).json({ error: "Title, medium, and image file are required." });
            }
    
            // Create a new gallery image document
            const newImage = new GalleryModel({
                title,
                description: description || "", // Default to empty string if not provided
                medium,
                price: price || 0, // Default to 0 if not provided
                category,
                url: result.url // Use the Cloudinary URL
            });
    
            // Save the image to the database
            await newImage.save();
            console.log("Image Saved to Database:", newImage);
    
            res.status(201).json({ message: "Image uploaded successfully!", image: newImage });
        } catch (error) {
            console.error("Error during upload:", error);
            res.status(500).json({ error: error.message });
        }
    }
    

    
    // static async getAllImages(req, res) {
    //     try {
    //         const { category, medium } = req.query;
    //         const filter = {};

    //         if (category) {
    //             filter.category = category;
    //         }
           
    //         if (medium) {
    //             filter.medium = medium;
    //         }

    //         const images = await GalleryModel.find(filter);
    //         res.status(200).json(images);
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // }

    // // Get Image by ID
    // static async getImageById(req, res) {
    //     try {
    //         const image = await GalleryModel.findById(req.params.id);
    //         if (!image) return res.status(404).json({ error: "Image not found" });
    //         res.status(200).json(image);
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // }

    // // Update Image Details
    // static async updateImage(req, res) {
    //     try {
    //         const { title, description, medium, price, category } = req.body;
    //         const updatedImage = await GalleryModel.findByIdAndUpdate(
    //             req.params.id,
    //             { title, description, medium, price, category },
    //             { new: true }
    //         );

    //         if (!updatedImage) return res.status(404).json({ error: "Image not found" });
    //         res.status(200).json({ message: "Image updated successfully", image: updatedImage });
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // }

    // // Delete Image
    // static async deleteImage(req, res) {
    //     try {
    //         const deletedImage = await GalleryModel.findByIdAndDelete(req.params.id);
    //         if (!deletedImage) return res.status(404).json({ error: "Image not found" });
    //         res.status(200).json({ message: "Image deleted successfully" });
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // }
}

export default GalleryController; 