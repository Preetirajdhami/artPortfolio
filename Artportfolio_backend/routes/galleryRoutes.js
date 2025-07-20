import express from "express";
import GalleryController from "../controllers/galleryControllers.js";
import upload from "../middleware/multer.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Gallery
 *   description: Gallery image management
 */

/**
 * @swagger
 * /api/gallery/upload:
 *   post:
 *     summary: Upload a new gallery image
 *     tags: [Gallery]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Image uploaded successfully
 *       400:
 *         description: Invalid image upload
 */
router.post("/upload", upload.single("image"), GalleryController.uploadImage);

/**
 * @swagger
 * /api/gallery:
 *   get:
 *     summary: Get all gallery images
 *     tags: [Gallery]
 *     responses:
 *       200:
 *         description: List of gallery images
 */
router.get("/", GalleryController.getAllImages);

/**
 * @swagger
 * /api/gallery/{id}:
 *   get:
 *     summary: Get gallery image by ID
 *     tags: [Gallery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the image
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Image details
 *       404:
 *         description: Image not found
 */
router.get("/:id", GalleryController.getImageById);

/**
 * @swagger
 * /api/gallery/{id}:
 *   put:
 *     summary: Update gallery image by ID
 *     tags: [Gallery]
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the image to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image updated successfully
 *       404:
 *         description: Image not found
 */
router.put("/:id", upload.single("image"), GalleryController.updateImage);

/**
 * @swagger
 * /api/gallery/{id}:
 *   delete:
 *     summary: Delete gallery image by ID
 *     tags: [Gallery]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the image to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *       404:
 *         description: Image not found
 */
router.delete("/:id", GalleryController.deleteImage);

export default router;
