import express from 'express';

import AdminController from '../controllers/adminControllers.js';
import verifyToken from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/login", AdminController.adminLogin);

// Protected dashboard route
router.get("/dashboard", verifyToken, (req, res) => {

    res.status(200).json({
      message: "Welcome to the admin dashboard",
      admin: req.admin.email, 
    });
  });

export default router;
