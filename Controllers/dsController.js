const dscollection = require('../Models/dsModel');

const getallController = async (req, res) => {
  try {
    const allds = await dscollection.findAll({
      where: { status: 1 }, // Fetch only visible offers
    });
    if (!allds.length) {
      return res.status(404).json({ message: 'No ds found.' });
    }
    res.json(allds);
  } catch (error) {
    console.error('Error fetching offers:', error);
    res.status(500).json({ message: 'Error fetching offers', error: error.message });
  }
};

module.exports = {
  getallController,
};
