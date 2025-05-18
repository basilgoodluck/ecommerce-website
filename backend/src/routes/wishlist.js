import express from 'express';
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} from '../controllers/wishListController.js';

const router = express.Router();

router.get('/', getWishlist);
router.post('/add', addToWishlist);
router.delete('/:id', removeFromWishlist);
router.delete('/clear-all', clearWishlist);

export default router;