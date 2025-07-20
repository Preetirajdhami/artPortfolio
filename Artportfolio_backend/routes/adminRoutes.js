import express from 'express';
import AdminController from '../controllers/adminControllers.js';
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin authentication and dashboard
 */

/**
 * @swagger
 * /api/admin/login:
 *   post:
 *     summary: Admin login
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 example: yourpassword
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", AdminController.adminLogin);

/**
 * @swagger
 * /api/admin/dashboard:
 *   get:
 *     summary: Get admin dashboard (protected route)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard data for authenticated admin
 *       401:
 *         description: Unauthorized - Token missing or invalid
 */
router.get("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({
    message: "Welcome to the admin dashboard",
    admin: req.admin.email,
  });
});

export default router;
