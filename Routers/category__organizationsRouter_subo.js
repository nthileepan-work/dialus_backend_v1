const category__organizationsController = require('../controllers/category__organizationsController_subo');


const express = require('express');
const router = express.Router();

router.get('/viewall', category__organizationsController.getallController);


module.exports = router