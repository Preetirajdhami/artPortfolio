import GalleryModel from "../models/Gallery.js";


class GalleryController {
    // Upload new image
    static async uploadImage(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({
                    message: "Image file is required."
                });
            }

            const {
                title,
                category
            } = req.body;

            if (!title || !category) {
                return res.status(400).json({
                    message: "Title and category are required."
                });
            }

            const newImage = new GalleryModel({
                title,
                category,
                url: req.file.path,
            });

            await newImage.save();

            res.status(201).json({
                message: "Image uploaded successfully!",
                image: newImage,
            });

        } catch (error) {
            console.error("Error uploading image:", error);
            return res.status(500).json({
                message: "Internal server error."
            });
        }
    }

    // Get all images (with optional filter by category)
    static async getAllImages(req, res) {
        try {
            const {
                category
            } = req.body;
            const filter = {};
            if (category) filter.category = category;

            const images = await GalleryModel.find(filter);
            res.status(200).json(images);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    // Get image by ID
    static async getImageById(req, res) {
        try {
            const image = await GalleryModel.findById(req.params.id);
            if (!image) {
                return res.status(404).json({
                    error: "Image not found"
                });
            }
            res.status(200).json(image);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    }

    

    // Delete image
    static async deleteImage(req, res) {
        try {
            const image = await GalleryModel.findByIdAndDelete(req.params.id);
            if (!image) {
                return res.status(404).json({
                    message: "Image not found."
                });
            }
            res.status(200).json({
                message: "Image deleted successfully!"
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error."
            });
        }
    }

    // Update image (title, category, and optionally image)
static async updateImage(req, res) {
  try {
    const { title, category } = req.body;
    const { id } = req.params;

    // Find the existing image
    const existingImage = await GalleryModel.findById(id);
    if (!existingImage) {
      return res.status(404).json({ message: "Image not found." });
    }

    // Update fields
    existingImage.title = title || existingImage.title;
    existingImage.category = category || existingImage.category;

    // Check if a new image file was uploaded
    if (req.file) {
      existingImage.url = req.file.path;
    }

    // Save updated image
    const updatedImage = await existingImage.save();

    res.status(200).json(updatedImage);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
}

}

export default GalleryController;