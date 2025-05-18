import express from 'express';
import { getProducts, getPromoProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/promo', getPromoProducts);

export default router;