const Offers = require('../Models/offersModel');

const getallController = async (req, res) => {
  try {
    const allOffers = await Offers.findAll({
      where: { status: 1 }, // Fetch only visible offers
    });
    if (!allOffers.length) {
      return res.status(404).json({ message: 'No offers found.' });
    }
    res.json(allOffers);
  } catch (error) {
    console.error('Error fetching offers:', error);
    res.status(500).json({ message: 'Error fetching offers', error: error.message });
  }
};

module.exports = {
  getallController,
};
