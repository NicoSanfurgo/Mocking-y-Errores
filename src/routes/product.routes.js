import { Router } from 'express';
import { isAdmin } from '../middleware/isAdmin.js';
import { passportCall } from '../utils.js';
import ProductController from '../controllers/products.controller.js';


const router = Router();
router.get('/', ProductController.getAllProducts); 
router.get('/:id', ProductController.getProductByID);
router.post('/', passportCall('current'), isAdmin, ProductController.addProduct);
router.put('/:id', passportCall('current'), isAdmin, ProductController.editProduct);
router.delete('/:id', passportCall('current'), isAdmin, ProductController.deleteProduct);

export default router;