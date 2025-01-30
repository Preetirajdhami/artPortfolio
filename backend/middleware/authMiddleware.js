import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
 
  const token = req.headers["authorization"]?.split(" ")[1];  

  if (!token) {
    return res.status(403).json({
      message: "No token provided, authorization denied",
    });
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; 
    next(); 
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({
      message: "Token is invalid or expired",
    });
  }
};

export default verifyToken;
