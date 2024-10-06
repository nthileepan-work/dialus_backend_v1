const express = require('express');
const router = express.Router();
const dscollectionController = require('../Controllers/dscollectionController_nive');

router.post('/create', dscollectionController.createDscollection);


module.exports = router;