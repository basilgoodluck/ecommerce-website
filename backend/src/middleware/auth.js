import { JsonWebToken } from "jsonwebtoken";

const jwt = JsonWebToken()

const authenticate = async (req, res, next) => {
    const authHeader = req.header.Authorization;
    
    if (!authHeader) {
      return res.status(401).json({ message: 'Access token not found' });
    }

    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded
      console.log(decoded)
      next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate' });
  }
};

export default authenticate