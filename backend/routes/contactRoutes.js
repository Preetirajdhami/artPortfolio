import express from "express";
import ContactController from "../controllers/contactController.js";

const router = express.Router();

router.post("/", ContactController.createMessage);
router.get("/", ContactController.getMessages);

export default router;
