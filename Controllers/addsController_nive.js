const addsController = require('../Models/addsModel_nive');
const upload = require('../middleware/upload');

// Create Adds
exports.createAdds = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        try {
            const { heading, descriptions, href, Org_name } = req.body;
            const logo = req.file ? req.file.path : '';  // Use uploaded file path or leave empty

            // Map the incoming fields to your model structure
            const newAdd = {
                Org_name: Org_name || heading,
                Logo: logo,
                href_link: href,
                status: 0,
            };

            // Create the record in the 'adds' table
            const adds = await addsController.create(newAdd);
            res.status(201).json(adds);
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: "Adds not created" });
        }
    });
};
