import dotenv from 'dotenv';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

class AdminController {
    static adminLogin = async (req, res) => {
        const {
            email,
            password
        } = req.body;

        try {
            if (email !== process.env.ADMIN_EMAIL) {
                return res.status(401).json({
                    message: 'Unauthorized: Invalid email'
                });

            }
            // Validate the password
            const isPasswordValid = await bcrypt.compare(password, process.env.ADMIN_PASSWORD);

            if (!isPasswordValid) {
                return res.status(401).json({
                    message: 'Unauthorized: Invalid password'
                });
            }
            // Generate a JWT token for the admin
            const token = jwt.sign({
                email: process.env.ADMIN_EMAIL
            }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });

            // Successful login response with token
            return res.status(200).json({
                message: 'Admin logged in successfully',
                token
            });

        } catch (error) {
            console.error('Error during login:', error);
            return res.status(500).json({
                message: 'Server error. Please try again later.'
            });
        }
    }
};

export default AdminController;