import express from 'express';
import { getRecommendedProducts } from '../controllers/recommended.js';

const router = express.Router();

router.get('/', getRecommendedProducts);

export default router;