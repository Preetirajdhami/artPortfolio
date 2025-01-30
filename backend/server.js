import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectdb.js"; 
import  adminRoutes from "./routes/adminRoutes.js"

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

app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
