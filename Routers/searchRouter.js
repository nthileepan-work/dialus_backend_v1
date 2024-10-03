const express = require("express");
const router = express.Router();
const {
  searchCategoriesAndOrganizations,
} = require("../Controllers/searchController");

// Search route
router.get("/", searchCategoriesAndOrganizations);

module.exports = router;
