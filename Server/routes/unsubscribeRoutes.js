const express = require('express');
const router = express.Router();
const unsubscribeController = require('../controllers/unsubscribeController');

// Define the route for unsubscribing
router.post('/:email', unsubscribeController.unsubscribe);

module.exports = router;
