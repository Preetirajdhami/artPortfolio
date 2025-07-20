import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Graphite & Charcoal', 'Watercolor', 'Acrylic', 'Pastel'],
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const GalleryModel = mongoose.model("Gallery", gallerySchema);
export default GalleryModel;
