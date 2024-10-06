const express = require('express');
const router = express.Router();
const categoriesController = require('../Controllers/categoriesController'); // Adjust path if necessary

// Route to get all categories
router.get('/view', categoriesController.getCategories);

// Route to get a category by ID
router.get('/:id', categoriesController.getCategoryById);

// Route search
router.get('/', categoriesController.getCategorieSearch);

module.exports = router;
