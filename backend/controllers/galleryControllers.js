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

    static async getAllImages(req, res){
        try{
            const { category, medium } = req.body;
            const filter = {};
            if(category) filter.category = category;
            if(medium) filter.medium = medium;

            const images = await GalleryModel.find(filter);
            res.status(200).json(images);


        }
        catch(error){
            res.status(5000).json({message:"error.message"});

        }

    }
    //get image by id

    static async getImageById(req, res){
        try{
            const image = await GalleryModel.findById(req.params.id);
            if(!image){
                return res.status(404).json({error:"Image not found"})

            }
             res.status(200).json(image);

        }
        catch(error){
            res.status(500).json({error:"error.message"});

        }
    }
    //update image info(not image file)

    static async updateImage(req, res){
        try{
            const {title, description, medium, price, category} = req.body;

            const updatedImage = await GalleryModel.findByIdAndUpdate(
                req.params.id,
                { title, description, medium, price, category },
                { new: true }
            );

            if (!updatedImage) {
                return res.status(404).json({message:"Image not found."});
            }

            res.status(200).json({
                message: "Image updated successfully!",
                image: updatedImage,
            });

        }
        catch(error){
            res.status(500).json({message:"Internal server error."});

        }
        
    }

    //Delete image

    static async deleteImage(req, res){
        try{
            const image = await GalleryModel.findByIdAndDelete(req.params.id);
            if(!image){
                return res.status(404).json({message:"Image not found."});
            }
             res.status(200).json({message:"Image deleted successfully!"});

        }
        catch(error){
            res.status(500).json({message:"Internal server error."});
        }
    }

}
export default GalleryController;