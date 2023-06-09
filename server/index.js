import cloudinary from 'cloudinary';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import userController from './controllers/userController.js';
import auth from './middleware/auth.js';
import routes from './routes/index.js';

const app = express();
// Load the environment variables from a .env file.
dotenv.config();

// Cloudinary Configuration
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
});

/* FILE STORAGE */
const upload = multer({ storage: multer.memoryStorage() });

// Connect to MongoDB
const DB = process.env.DATABASE;
mongoose
	.connect(process.env.MONGODB_URI || DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB connection successful'));

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Route with file
app.post('/api/user/register', upload.single('file'), userController.register);
app.use('/api', routes);

const port = process.env.PORT || 5000;
app.listen(port);
