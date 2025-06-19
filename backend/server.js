/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/Routes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json()); // สำหรับ parse JSON request body
app.use(cors());

// Routes
app.use('/', userRoutes);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(' Connected to MongoDB');
})
.catch((error) => {
  console.error(' MongoDB connection failed:', error.message);
});

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
