const City = require('../Models/CityModel_thil');

// Controller to get all cities
exports.getAllCities = async (req, res) => {
    try {
        const cities = await City.findAll();
        res.json(cities);
    } catch (error) {
        console.error('Error fetching cities:', error);
        res.status(500).send('An error occurred');
    }
};

// Controller to get city by ID
exports.getCityById = async (req, res) => {
    try {
        const { id } = req.params;
        const city = await City.findByPk(id);

        if (city) {
            res.json(city);
        } else {
            res.status(404).send('City not found');
        }
    } catch (error) {
        console.error('Error fetching city:', error);
        res.status(500).send('An error occurred');
    }
};
