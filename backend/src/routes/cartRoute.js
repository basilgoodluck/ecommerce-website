import { Router } from "express";
import { addToCart } from "../controllers/cartController";
import { clearCart } from "../controllers/cartController";
import { deleteCartItem } from "../controllers/cartController";
import authenticate from "../middleware/auth"

const router = Router()

router.post("/add-to-cart", authenticate, addToCart);
router.delete("/delete-cartItem", authenticate, deleteCartItem);
router.delete("/clear-cart", authenticate, clearCart)