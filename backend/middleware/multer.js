import multer from 'multer';
import {
  CloudinaryStorage
} from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'art_gallery',
    // allowed_formats: ['jpg', 'png', 'jpeg', 'webp']
    format: async (req, file) => file.mimetype.split('/')[1], // Dynamically set format
    public_id: (req, file) => file.originalname.split('.')[0],
  }
});

const upload = multer({
  storage
});

export default upload;