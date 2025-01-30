import express from 'express';
import GalleryController from "../controllers/galleryControllers.js"; 
import upload from '../middleware/multer.js';

const router = express.Router();

// Gallery upload endpoint
router.post("/upload", upload.single("image"), GalleryController.uploadImage);

// Get all images
router.get("/", GalleryController.getAllImages);

// Get image by ID
router.get("/:id", GalleryController.getImageById);

// Update image details
router.put("/:id", GalleryController.updateImage);

// Delete image
router.delete("/:id", GalleryController.deleteImage);

export default router;
