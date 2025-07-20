import express from "express";
import ContactController from "../controllers/contactController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: Contact form messages management
 */

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Create a new contact message
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 example: Preeti Rajdhami
 *               email:
 *                 type: string
 *                 format: email
 *                 example: preeti@example.com
 *               message:
 *                 type: string
 *                 example: Hello, I want to know more about your commissions.
 *     responses:
 *       201:
 *         description: Message created successfully
 *       400:
 *         description: Invalid request data
 */
router.post("/", ContactController.createMessage);

/**
 * @swagger
 * /api/contact:
 *   get:
 *     summary: Get all contact messages
 *     tags: [Contact]
 *     responses:
 *       200:
 *         description: List of contact messages
 */
router.get("/", ContactController.getMessages);

/**
 * @swagger
 * /api/contact/{id}:
 *   delete:
 *     summary: Delete a contact message by ID
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the message to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Message deleted successfully
 *       404:
 *         description: Message not found
 */
router.delete("/:id", ContactController.deleteMessage);

/**
 * @swagger
 * /api/contact/{id}/archive:
 *   patch:
 *     summary: Toggle archive status of a contact message
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the message to archive/unarchive
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Archive status toggled successfully
 *       404:
 *         description: Message not found
 */
router.patch("/:id/archive", ContactController.toggleArchive);

export default router;
