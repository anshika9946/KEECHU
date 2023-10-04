const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
  },
  verificationToken: String,
  isVerified: Boolean,
});

// Create and export the Subscriber model
module.exports = mongoose.model('Subscriber', subscriberSchema);
