import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config(); 

const connectDB = async () => {
    try {
        const DATABASE_URL = process.env.DATABASE_URL;
        if (!DATABASE_URL) {
            throw new Error(" DATABASE_URL is not defined in .env file");
        }

        const DB_OPTIONS = {
            dbName: "artPortfolio"
           
        };

        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
