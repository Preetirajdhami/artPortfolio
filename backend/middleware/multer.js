import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});


const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "gallery", 
        allowed_formats: ["jpg", "jpeg", "png", "webp"] 
    }
});


const upload = multer({ storage });

export default upload;
