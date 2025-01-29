import express from 'express';
import { verifyAdmin } from "../middleware/authMiddleware.js";
import { adminLogin, createAdmin } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", adminLogin)

router.post("/create-admin", createAdmin);
router.get("/protected", verifyAdmin, (req, res) => {
    res.json({ message: "You are authorized" });
});

export default router;
