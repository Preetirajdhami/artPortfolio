
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary.js';

const comissionStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'comissions', 
    format: async (req, file) => file.mimetype.split('/')[1],
    public_id: (req, file) => file.originalname.split('.')[0],
  },
});

const comissionUpload = multer({ storage: comissionStorage });

export default comissionUpload;
