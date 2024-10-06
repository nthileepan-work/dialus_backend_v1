const District = require('../Models/DistrictModel_thil');

// Controller to get all districts
exports.getAllDistricts = async (req, res) => {
    try {
        const districts = await District.findAll();
        res.json(districts);
    } catch (error) {
        console.error('Error fetching districts:', error);
        res.status(500).send('An error occurred');
    }
};

// Controller to get district by ID
exports.getDistrictById = async (req, res) => {
    try {
        const { id } = req.params;
        const district = await District.findByPk(id);

        if (district) {
            res.json(district);
        } else {
            res.status(404).send('District not found');
        }
    } catch (error) {
        console.error('Error fetching district:', error);
        res.status(500).send('An error occurred');
    }
};
