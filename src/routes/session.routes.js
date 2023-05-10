import { Router } from 'express';
import { passportCall } from '../utils.js';
import SessionController from '../controllers/session.controller.js'

const router = Router();

router.post('/login', SessionController.login);
router.post('/register', SessionController.register);
router.get('/current', passportCall('current'), SessionController.current);
router.get('/logout', SessionController.handleLogout);

export default router;