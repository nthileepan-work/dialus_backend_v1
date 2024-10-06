const express = require('express');
const joinController = require('../controllers/joinController_subo');

const router = express.Router();

router.get('/test/:id/:district_id/', joinController.test);
router.get('/test1/:id', joinController.test1);
router.get('/test2/:id', joinController.test2);
router.get('/test3', joinController.test3);
router.get('/test4', joinController.test4);


module.exports = router;