import mongoose, { Schema } from 'mongoose';

export default mongoose.model(
	'Request',
	mongoose.Schema(
		{
			songId: {
				type: String,
				required: true,
			},
			language: {
				type: String,
				required: true,
			},
			owner: {
				type: String,
				required: true,
			},
		},
		{ timestamps: true }
	)
);
