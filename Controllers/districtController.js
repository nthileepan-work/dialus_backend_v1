const { District } = require("../Models");

const getAllDistricts = async (req, res) => {
  try {
    const districts = await District.findAll();
    res.json(districts);
  } catch (error) {
    console.error("Error fetching districts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllDistricts };
