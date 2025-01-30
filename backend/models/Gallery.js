import mongoose from "mongoose";

const gallerySchema =  new mongoose.Schema({
    title: {type: String, required: true},
    description: { type: String },             
    url: { type: String, required: true },     
    medium: { type: String, required: true },  
    price: { type: Number, default: 0, required: false },       
    category: { type: String, required: true, enum: ["Charcoal", "Watercolor", "Acrylic"] },
    createdAt: { type: Date, default: Date.now }

});

const GalleryModel = mongoose.model("gallery", gallerySchema);

export default GalleryModel;