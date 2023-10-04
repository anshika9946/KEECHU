const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

// Define the route for sending newsletters
router.post('/send-newsletter', newsletterController.sendNewsletter);

module.exports = router;
