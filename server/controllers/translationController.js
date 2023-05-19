import jwt from 'jsonwebtoken';
import Request from '../models/requestModel.js';
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
		const songRequests = await Request.find({
			songId: songId,
		}).sort({
			createdAt: -1,
		});
		const songData = { songTranslations, songRequests };
		res.json({ songData });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const getSongData = async (req, res) => {
	try {
		const songTranslations = await Translation.find({
			songId: req.params.id,
		}).sort({
			createdAt: -1,
		});
		const songRequests = await Request.find({
			songId: req.params.id,
		}).sort({
			createdAt: -1,
		});
		const songData = { songTranslations, songRequests };
		res.json({ songData });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const makeRequest = async (req, res) => {
	try {
		const { songId, language, owner } = req.body;
		const newRequest = new Request({
			songId,
			language,
			owner,
		});
		await newRequest.save();
		const songTranslations = await Translation.find({
			songId: songId,
		}).sort({
			createdAt: -1,
		});
		const songRequests = await Request.find({
			songId: songId,
		}).sort({
			createdAt: -1,
		});
		const songData = { songTranslations, songRequests };
		res.json({ songData });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const grantRequest = async (req, res) => {
	try {
		const {
			songId,
			requestId,
			translation,
			language,
			translator,
			translatorPicturePath,
		} = req.body;
		const newTranlsation = new Translation({
			songId,
			translation,
			language,
			translator,
			translatorPicturePath,
		});
		await newTranlsation.save();
		await Request.findByIdAndDelete(requestId);
		const songTranslations = await Translation.find({
			songId: songId,
		}).sort({
			createdAt: -1,
		});
		const songRequests = await Request.find({
			songId: songId,
		}).sort({
			createdAt: -1,
		});
		const songData = { songTranslations, songRequests };
		res.json({ songData });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export default { createTranslation, getSongData, makeRequest, grantRequest };
