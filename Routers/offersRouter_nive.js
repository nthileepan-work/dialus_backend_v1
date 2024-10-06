const express = require('express');
const router = express.Router();
const offersController = require('../Controllers/offersController_nive');

router.post('/create', offersController.createOffers);


module.exports = router;