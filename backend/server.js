import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(notFound);
app.use(errorHandler);
