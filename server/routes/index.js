import express from 'express';
import translationRoutes from './translations.js';
import userRoutes from './users.js';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/translation', translationRoutes);

export default router;
