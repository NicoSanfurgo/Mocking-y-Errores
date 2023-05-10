import { Router } from 'express';
import { generateProduct } from '../utils/mocks/product.mock.js';

const router = Router();

router.get('/', (req, res) => {
    const products = [];
    for(let i=0; i<100; i++){
        products.push(generateProduct())
    }
    res.status(200).json(products);
}); 

export default router;