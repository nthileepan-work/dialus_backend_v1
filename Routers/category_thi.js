const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/category_thil');

// Get all categories or search by keyword
router.get('/view', categoryController.getCategories);

router.get('/Filtered', categoryController.getFiltered);

// Get category by ID
router.get('/view/:id', categoryController.getCategoryById);

module.exports = router;
