const Subscriber = require('../models/Subscriber');

const unsubscribe = async (req, res) => {
  const email = req.params.email;

  try {
    // Find the subscriber with the given email and remove it
    const result = await Subscriber.findOneAndRemove({ email });

    if (!result) {
      return res.status(404).json({ error: 'Subscriber not found.' });
    }

    res.status(200).json({ message: 'Unsubscribed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during unsubscription.' });
  }
};

module.exports = {
  unsubscribe,
};
