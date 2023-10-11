const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// Define a route to get the list of subscribers
router.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching subscribers.' });
  }
});

module.exports = router;