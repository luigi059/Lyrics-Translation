import mongoose, { Schema } from 'mongoose';

export default mongoose.model(
	'User',
	mongoose.Schema({
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		picturePath: {
			type: String,
			required: false,
			default: null,
		},
		pictureId: {
			type: String,
			required: false,
			default: null,
		},
	})
);
