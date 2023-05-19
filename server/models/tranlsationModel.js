import mongoose, { Schema } from 'mongoose';

export default mongoose.model(
	'Translation',
	mongoose.Schema(
		{
			songId: {
				type: String,
				required: true,
			},
			translation: {
				type: String,
				required: true,
			},
			language: {
				type: String,
				required: true,
			},
			translator: {
				type: String,
				required: true,
			},
			translatorPicturePath: {
				type: String,
				required: true,
			},
		},
		{ timestamps: true }
	)
);
