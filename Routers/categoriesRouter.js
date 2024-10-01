const express = require('express');
const router = express.Router();
const categoriesController = require('../Controllers/categoriesController'); // Adjust path if necessary

// Route to get all categories
router.get('/', categoriesController.getCategories);

// Route to get a category by ID
router.get('/:id', categoriesController.getCategoryById);

module.exports = router;
