const { where } = require('sequelize');
const models = require('../Models/index_subo');

async function test(req, res) { 
    try {
        const districtId = req.params.district_id === '0' || !req.params.district_id ? null : req.params.district_id;

        const categoryOrganizations = await models.category__organizations.findAll({
            attributes: ['cate_id', 'org_id'],
            include: [
                {
                    model: models.categories,
                    where: { cate_status: 1 },
                    attributes: ['cate_id', 'cate_name']
                },
                {
                    model: models.organizations,
                    attributes: ['org_id', 'org_name', 'org_city', 'org_district', 'org_location', 'org_base_category'],
                    where: {
                        org_status: 1,
                        ...(districtId && { org_district: districtId })  // Only filter by district if it's provided
                    },
                    include: [
                        {
                            model: models.cities,
                            attributes: ['city_name'],
                        },
                        {
                            model: models.districts,
                            attributes: ['district_id', 'district_name'],
                        },
                        {
                            model: models.contacts,
                            attributes: ['contact_id','org_id', 'type', 'value'],
                        }
                    ]
                }
            ],
            where: {
                cate_id: req.params.id 
            },
        });

        res.status(200).json({
            data: categoryOrganizations
        });
    } catch (error) {
        console.error('Error fetching category organizations:', error);
        res.status(500).json({
            error: error.name,
            message: error.message
        });
    }
}

async function test1(req, res) {
    try {
        const Organizations = await models.organizations.findAll({
            attributes: ['org_id', 'org_name', 'org_city' , 'org_district','org_location','org_base_category'],
            include: [
                {
                    model: models.cities,
                    attributes: ['city_name'], // Change to true if you want to enforce matching records
                },
                {
                    model: models.districts,
                    attributes: [ 'district_name'], // Change to true if you want to enforce matching records
                },
                {
                    model: models.contacts,
                    attributes: ['org_id' , 'type','value'],
                    arguments: [where({org_id: req.params.id})],
                }
            ],
            where: {
                org_id: req.params.id,
                org_status: 1
            },
           
        });

        res.status(200).json({
            data: Organizations
        });
        
    } catch (error) {
        console.error('Error fetching organizations:', error);
        res.status(500).json({  
            error: error.name,
            message: error.message
        });
    }
    
}

async function test2(req, res) {

    try {
        const contacts = await models.contacts.findAll({
            attributes: ['org_id' , 'type','value'],
            include: [
                {
                    model: models.organizations,
                    attributes: ['org_id', 'org_name', 'org_city' , 'org_district','org_location','org_base_category'], // Change to true if you want to enforce matching records
                    arguments: [where({org_status: 1})],
                }
            ],
            
            where: {
                org_id: req.params.id,
            },

        
        });
        res.status(200).json({
            data: contacts
        });
        
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({  
            error: error.name,
            message: error.message
        });
        
    }
    
}

async function test3(req, res) {

    try {
        const free_listings = await models.free_listings.findAll({
            include: [
                {
                    model: models.organizations,
                    required: false // Change to true if you want to enforce matching records
                },
                {
                    model: models.cities,
                    required: false // Change to true if you want to enforce matching records
                },
                {
                    model: models.districts,
                    required: false // Change to true if you want to enforce matching records
                },
                {
                    model: models.categories,
                    required: false // Change to true if you want to enforce matching records
                },
                {
                    model: models.contacts,
                    required: false // Change to true if you want to enforce matching records
                }
            ]   
        })

        res.status(200).json({
            data: free_listings
        });
        
    } catch (error) {
        console.error('Error fetching free listings:', error);
        res.status(500).json({  
            error: error.name,
            message: error.message
        });
        
    }   
    
}

async function test4(req, res) {

    try {
        const cities = await models.cities.findAll({
            include: [
                {
                    model: models.districts,
                    required: false // Change to true if you want to enforce matching records
                }
            ]
        })
        res.status(200).json({
            data: cities
        });
    } catch (error) {
        console.error('Error fetching cities :', error);
        res.status(500).json({
            error: error.name,
            message: error.message  
        });
    }
    
}

module.exports = {
    test: test,
    test1: test1,
    test2: test2,
    test3: test3,
    test4: test4
};
