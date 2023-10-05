const Subscriber = require('../models/Subscriber');
const validator = require('validator');

const subscribe = async (req, res) => {
  try {
    console.log('Received a subscribe request:', req.body);
    const { email } = req.body;

    // Validate the email address
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    // Check if the email already exists in the database
    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      return res.status(400).json({ error: 'Email address is already subscribed.' });
    }

    // Create a new subscriber in the database
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();


    console.log('Response Status:', res.statusCode);
    
    // Send a success response back to the client
    res.status(200).json({ message: 'Subscription successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error.' });
  }
};

module.exports = {
  subscribe,
};
