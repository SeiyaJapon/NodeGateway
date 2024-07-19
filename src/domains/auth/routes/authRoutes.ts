import { Router } from 'express';
import { createToken, register } from '../controllers/authController';

const router = Router();

router.post('/createToken', createToken);
router.post('/register', register);

export default router;