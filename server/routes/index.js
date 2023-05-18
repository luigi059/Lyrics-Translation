import express from 'express';
import userRoutes from './users.js';

const router = express.Router();

router.use('/user', userRoutes);

export default router;
