const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const uuid = require('uuid');
const validator = require('validator');
require('dotenv').config();
const subscribeRoutes = require('./routes/subscribeRoutes');
const Subscriber = require('./models/Subscriber'); 

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

// Backend route for email verification
app.get('/verify/:token', async (req, res) => {
  const token = req.params.token;
  try {
      // Find the subscriber with the given token
      const subscriber = await Subscriber.findOne({ verificationToken: token });

      if (!subscriber) {
          return res.status(404).send('Invalid verification token.');
      }

      // Update the 'isVerified' field to 'true'
      subscriber.isVerified = true;
      await subscriber.save();

      // Provide a response to the user
      console.log('Email verification successful');
      res.send('Subscription successfully verified.');
      
  } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred during email verification.');
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
