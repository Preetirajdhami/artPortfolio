import multer from 'multer';
import {
  CloudinaryStorage
} from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'art_gallery',
   
    format: async (req, file) => file.mimetype.split('/')[1], 
    public_id: (req, file) => file.originalname.split('.')[0],
  }
});

const upload = multer({
  storage
});

export default upload;