import express from 'express';
import translationController from '../controllers/translationController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/create', auth, translationController.createTranslation);
router.post('/request', auth, translationController.makeRequest);
router.post('/request/grant', auth, translationController.grantRequest);
router.get('/song/:id', translationController.getSongData);

export default router;
