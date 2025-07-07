import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectdb.js"; 
import  adminRoutes from "./routes/adminRoutes.js"
import galleryRoutes from "./routes/galleryRoutes.js"
import comissionRoutes from "./routes/comissionRoutes.js";

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
const corsOptions = {
    origin: process.env.FRONTEND_HOST,
    credentials: true,
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

app.use(cookieParser());
app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next();
});


app.use("/api/admin", adminRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/comissions", comissionRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
