const Subscriber = require('../models/Subscriber');

const unsubscribe = async (req, res) => {
  try {
    const { identifier } = req.params;

    // Find the subscriber by the provided identifier (e.g., email address)
    const subscriber = await Subscriber.findOne({ email: identifier });

    if (!subscriber) {
      return res.status(404).json({ error: 'Subscriber not found.' });
    }

    // Delete the subscriber from the database
    await subscriber.remove();

    res.status(200).json({ message: 'Unsubscribed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during the unsubscribe process.' });
  }
};

module.exports = {
  unsubscribe,
};
