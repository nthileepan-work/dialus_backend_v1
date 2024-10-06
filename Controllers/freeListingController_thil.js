const FreeListing = require('../Models/FreeListingModel');
const Contact = require('../Models/ContactModel');

// Controller to create a new free listing
exports.createListing = async (req, res) => {
    const { name, category, city, district, address, description, contacts } = req.body;
    console.log(JSON.stringify(req.body))
    try {
        // Prepare SEO URL
        const orgSeoUrl = name.toLowerCase().replace(/\s+/g, '-');

        // Insert data into `free_listings`
        const newListing = await FreeListing.create({
            org_name: name,
            org_seo_url: orgSeoUrl,
            org_city: city,
            org_district: district,
            org_location: address,
            org_base_category: category,
            org_description: description,
            org_created_date: new Date(),
            org_update_date: new Date()
        });

        const orgId = newListing.org_id;

        // Insert contacts into `contacts`
        const contactPromises = contacts.map(contact => {
            // Extract the `value` field from `contact.type`
            return Contact.create({
                org_id: orgId,
                type: contact.type.value,  // Extracting the 'value' field
                value: contact.value
            });
        });

        await Promise.all(contactPromises);

        res.status(200).json(newListing);
    } catch (error) {
        console.error('Error creating free listing:', error);
        res.status(500).send('An error occurred');
    }
};

