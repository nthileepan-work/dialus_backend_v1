const dscollectionController = require('../Models/dscollectionModel_nive');
const upload = require('../middleware/upload');

// Create DS Collection
exports.createDscollection = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        try {
            const { heading, descriptions, href } = req.body;
            const image = req.file ? req.file.path : '';  // Use uploaded file path or leave empty

            // Map the incoming fields to your model structure
            const newDsCollection = {
                heading,
                descriptions,
                href,
                image: image, // Save the image path
            };

            // Create the record in the 'dscollection' table
            const dscollection = await dscollectionController.create(newDsCollection);
            res.status(201).json(dscollection);
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: "DS Collection not created" });
        }
    });
};
