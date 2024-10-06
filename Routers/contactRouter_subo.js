const contactController = require('../controllers/contactController_subo');


const express = require('express');
const router = express.Router();

router.get('/viewall', contactController.getallController);
router.get('/view/:id', contactController.getController);

module.exports = router;