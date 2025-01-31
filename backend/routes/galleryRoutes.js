import express from "express";
import GalleryController from "../controllers/galleryControllers.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// Gallery upload endpoint with error handling
router.post("/upload", (req, res, next) => {
    console.log(" Received a file upload request");

    upload.single("image")(req, res, (err) => {
        if (err) {
            console.error("Multer Error:", err.message);
            return res.status(400).json({ error: err.message });
        }
        console.log(" Multer upload successful");
        next();
    });
}, GalleryController.uploadImage);

// Get all images
router.get("/", GalleryController.getAllImages);

// Get image by ID
router.get("/:id", GalleryController.getImageById);

// Update image details
router.put("/:id", GalleryController.updateImage);

// Delete image
router.delete("/:id", GalleryController.deleteImage);

export default router;
