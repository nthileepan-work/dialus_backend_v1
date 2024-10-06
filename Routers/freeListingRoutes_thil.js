const express = require('express');
const freeListingController = require('../Controllers/freeListingController_thil');
const router = express.Router();

// Route to create a new free listing
router.post('/', freeListingController.createListing);

module.exports = router;
