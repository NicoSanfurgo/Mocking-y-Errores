import { Router } from 'express';
import cartsRoutes from './cart.routes.js';
import chatRoutes from './chat.routes.js';
import mockRoutes from './mock.routes.js';
import productsRoutes from './product.routes.js';
import sessionRoutes from './session.routes.js';
import viewsRouter from './views.routes.js';

const router = Router();

router.use('/api/products', productsRoutes);
router.use('/api/cart', cartsRoutes);
router.use('/session', sessionRoutes);
router.use('/chat', chatRoutes);
router.use('/', viewsRouter);
router.use('/mockingproducts', mockRoutes);
router.get('*', (req, res) => { res.status(404).send('404 not found')})

export default router;