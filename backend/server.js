import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});