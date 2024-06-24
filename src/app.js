const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(express.json());
const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);


dotenv.config();
connectDB();

app.use('/api', userRoutes);

app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
