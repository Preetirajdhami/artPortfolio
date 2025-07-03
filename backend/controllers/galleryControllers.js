import GalleryModel from "../models/Gallery.js";
import cloudinary from "../utils/cloudinary.js";

class GalleryController{
    //upload new image
    static async uploadImage(req, res){
        try{
            if(!req.file){
                return res.status(400).json({message:"Image file is required."});

            }
             
            const{title, description, medium, price, category}= req.body;

            if(!title || !description || !medium || !price || !category){
                return res.status(400).json({message:"All fields are required."});
            }

            const newImage = new GalleryModel({
                title,
                description: description || "",
                medium,
                price: price || 0,
                category,
                url:req.file.path,
            });

            await newImage.save();

            res.status(201).json({
                message: "Image uploaded sucessfully!",
                image: newImage,
            });
            
        }
        catch(error){
            console.error("Error uploading image:", error);
            return res.status(500).json({message:"Internal server error."});
        }

    }
    //Get all imager (with optional filters)
    //get image by id
    //update image info(not image file)
    //Delete image

}
export default GalleryController;