import { Router } from 'express';
import { isUser } from '../middleware/isUser.js';
import { passportCall } from '../utils.js';
import ChatController from '../controllers/chat.controller.js';

const router = Router();

router.get('/', passportCall('current'), ChatController.getAllMessages);
router.post('/', passportCall('current'), isUser, ChatController.sendMessage);

export default router;