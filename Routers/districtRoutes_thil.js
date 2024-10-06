const express = require('express');
const districtController = require('../Controllers/districtController_thil');
const router = express.Router();

// Route to get all districts
router.get('/', districtController.getAllDistricts);

// Route to get a district by ID
router.get('/:id', districtController.getDistrictById);

module.exports = router;
