import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connect } from './config/mongodb.js';
import authRoute from './routes/authRoute.js';
import cartRoute from './routes/cartRoute.js';
import withListRoute from './routes/wishlist.js';
import recommendedRoute from './routes/recommended.js';
import productRoute from './routes/productRoute.js';
import authenticate from './middleware/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;
connect();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/auth', authRoute);
app.use('/api/cart', authenticate, cartRoute);
app.use('/api/wishlist', authenticate, withListRoute);
app.use('/api/recommended', authenticate, recommendedRoute);
app.use('/api/products', productRoute);

app.listen(PORT, () => {
  console.log(`App is running on port http://localhost:${PORT}`);
});