import jwt from "jsonwebtoken";

export const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({message: "Unauthorized"});

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.adminId = decoded.id;
        next();
    });
};