const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const uuid = require('uuid');
const validator = require('validator');
require('dotenv').config();
const subscribeRoutes = require('./routes/subscribeRoutes');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your routes and API endpoints here

// Use the subscribeRoutes
app.use('/api', subscribeRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
