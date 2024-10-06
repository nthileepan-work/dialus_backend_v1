const organizationsController = require('../controllers/organizationsController_subo');


const express = require('express');
const router = express.Router();

router.get('/viewCategories/:id', organizationsController.getallCategories);
router.get('/viewallDistricts/:id', organizationsController.getallDistricts);


module.exports = router