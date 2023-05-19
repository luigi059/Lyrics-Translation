import jwt from 'jsonwebtoken';
import Translation from '../models/tranlsationModel.js';

const createTranslation = async (req, res) => {
	try {
		const { songId, translation, language, translator, translatorPicturePath } =
			req.body;
		const newTranlsation = new Translation({
			songId,
			translation,
			language,
			translator,
			translatorPicturePath,
		});
		await newTranlsation.save();
		const songTranslations = await Translation.find({
			songId: songId,
		}).sort({
			createdAt: -1,
		});
		res.json({ songTranslations });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const getSongTranslations = async (req, res) => {
	try {
		const songTranslations = await Translation.find({
			songId: req.params.id,
		}).sort({
			createdAt: -1,
		});
		res.json({ songTranslations });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export default { createTranslation, getSongTranslations };
