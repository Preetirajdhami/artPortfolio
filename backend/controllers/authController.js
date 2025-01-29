import Admin from "../models/Admin.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        const admin = await Admin.findOne({
            email
        });
        if (!admin) return res.status(401).json({
            message: "Invalid credential"
        });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).json({
            message: "Invalid Credentials"
        });

        const token = jwt.sign({
            id: admin._id
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        res.cookie("token", token, {
            httpOnly: true,
            secure: false
        }); 
        res.json({
            message: "Login successful",
            token
        });


    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }

};

export const createAdmin = async (res, req) => {
    const {
        email,
        password
    } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({
            email,
            password: hashedPassword
        });
        await newAdmin.save();
        res.json({
            message: "Admin created successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating admin"
        });
    }
};