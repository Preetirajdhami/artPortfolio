import express from "express";
import comissionUpload from "../middleware/comissionUpload.js";
import ComissionController from "../controllers/comissionController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Commissions
 *   description: Commission order management
 */

/**
 * @swagger
 * /api/comissions:
 *   post:
 *     summary: Create a new commission
 *     tags: [Commissions]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - numberOfPortraits
 *               - portraitImage
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Preeti
 *               lastName:
 *                 type: string
 *                 example: Rajdhami
 *               email:
 *                 type: string
 *                 format: email
 *                 example: preeti@example.com
 *               numberOfPortraits:
 *                 type: number
 *                 example: 2
 *               portraitImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Commission successfully created
 *       400:
 *         description: Missing or invalid data
 */
router.post(
  "/",
  comissionUpload.single("portraitImage"),
  ComissionController.createComission
);

/**
 * @swagger
 * /api/comissions:
 *   get:
 *     summary: Get all commission requests
 *     tags: [Commissions]
 *     responses:
 *       200:
 *         description: A list of commissions
 */
router.get("/", ComissionController.getAllComissions);

/**
 * @swagger
 * /api/comissions/{id}/status:
 *   put:
 *     summary: Update the status of a commission
 *     tags: [Commissions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the commission to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: approved
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       404:
 *         description: Commission not found
 */
router.put("/:id/status", ComissionController.updateStatus);

export default router;
