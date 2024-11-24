import { JsonWebToken } from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { connect } from "../config/mongodb";

const jwt = JsonWebToken()

const auth = async (req, res, next) => {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '');
      
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const db = await connect();
      const user = await db.collection('users').findOne({
        _id: new ObjectId(decoded.userId)
      });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      req.user = user;
      req.userId = user._id;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Please authenticate' });
    }
  };