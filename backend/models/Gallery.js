import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    medium: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ['Graphite', 'Watercolor', 'Acrylic', 'Pastel'], 
        required: false
        
    },
    url: {
        type: String,
        required: true
    }
});

const GalleryModel = mongoose.model("Gallery", gallerySchema);

export default GalleryModel;
