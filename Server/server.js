const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const uuid = require('uuid');
const validator = require('validator');
require('dotenv').config();
const subscribeRoutes = require('./routes/subscribeRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes'); 
const unsubscribeRoutes = require('./routes/unsubscribeRoutes');
const Subscriber = require('./models/Subscriber'); 
const subscribeListRoute = require('./routes/subscribeListRoute');


const https = require('https'); 

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
// Use the newsletterRoutes
app.use('/api', newsletterRoutes);
// Use the unsubscribeRoutes
app.use('/api/unsubscribe', unsubscribeRoutes);
// Use the subscribe list route
app.use('/api', subscribeListRoute);

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
      res.sendFile(__dirname + '/verification-success.html');
      
  } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred during email verification.');
  }
});

// Keep the server awake by sending a request every 5 minutes
setInterval(() => {
  https.get('https://keechu.onrender.com');
}, 300000); 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
