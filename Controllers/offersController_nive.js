const offersController = require('../Models/offersModel_nive');
const upload = require('../middleware/upload');

// Create Offers
exports.createOffers = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        try {
            const { heading, descriptions, href } = req.body;
            const image = req.file ? req.file.path : '';  // Use uploaded file path or leave empty

            // Map the incoming fields to your model structure
            const newOffer = {
                heading,
                descriptions,
                href,
                image: image, // Save the image path
            };

            console.log(newOffer)
            // Create the record in the 'offers' table
            const offer = await offersController.create(newOffer);
            res.status(201).json(offer);
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: "Offers not created" });
        }
    });
};
