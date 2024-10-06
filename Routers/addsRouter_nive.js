const express = require('express');
const router = express.Router();
const addsController = require('../Controllers/addsController_nive');

router.post('/create', addsController.createAdds);


module.exports = router;