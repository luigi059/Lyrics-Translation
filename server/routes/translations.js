import express from 'express';
import translationController from '../controllers/translationController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/create', auth, translationController.createTranslation);
router.get('/song/:id', translationController.getSongTranslations);

export default router;
