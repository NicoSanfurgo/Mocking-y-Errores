import { Router } from 'express';
import { isUser } from '../middleware/isUser.js';
import { passportCall } from '../utils.js';
import CartController from '../controllers/cart.controller.js';

const router = Router();
router.post('/', CartController.createCart);
router.get('/:id', CartController.getCartById);
router.put('/:id', passportCall('current'), isUser, CartController.addProductToCart);
router.put('/:id/product/:pid', CartController.addProductQuantityToCart);
router.delete('/:id/product/:pid', CartController.deleteProductFromCart);
router.delete('/:id', CartController.deleteAllProductsFromCart);
router.get('/:id/purchase', passportCall('current'), CartController.completePurchase)

export default router;