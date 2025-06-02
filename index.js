const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/auth');
require('dotenv').config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
const MONGODB_URI = process.env.MONGODB_URI;
 // Database connection
mongoose.connect(`${MONGODB_URI}`)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// 

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 