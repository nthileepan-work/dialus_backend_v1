const express = require('express');
const cityController = require('../Controllers/cityController_thil');
const router = express.Router();

// Route to get all cities
router.get('/', cityController.getAllCities);

// Route to get a city by ID
router.get('/:id', cityController.getCityById);

module.exports = router;
