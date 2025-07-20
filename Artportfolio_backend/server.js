import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectdb.js";
import adminRoutes from "./routes/adminRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import comissionRoutes from "./routes/comissionRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { swaggerUi, swaggerSpec } from './swagger.js';


dotenv.config();
const app = express();

connectDB();

app.use(express.json());

// ✅ Allow multiple origins
const allowedOrigins = (process.env.FRONTEND_HOSTS || "").split(",");

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/comissions", comissionRoutes);
app.use("/api/contact", contactRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("🎨 Art Portfolio Backend is live and running!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));