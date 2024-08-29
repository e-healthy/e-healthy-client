import { Router } from 'express';
import { saveEmail } from '../controllers/EmailController';

const router = Router();

router.post('/emails', saveEmail);

export default router;
