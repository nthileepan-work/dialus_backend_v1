const districtsController = require('../controllers/districtsController_subo');


const express = require('express');
const router = express.Router();

router.get('/viewall', districtsController.getallController);
router.get('/view/:id', districtsController.getController);


module.exports = router