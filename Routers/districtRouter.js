const express = require("express");
const router = express.Router();
const { getAllDistricts } = require("../Controllers/districtController");

// Route to get all districts
router.get("/", getAllDistricts);

module.exports = router;
