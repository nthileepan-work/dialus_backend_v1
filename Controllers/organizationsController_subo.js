const { where } = require('sequelize');
const db = require('../Models/index_subo');


//create main model
const Organizations = db.organizations;

//main work


//get all data
const getallCategories = async (req, res) => {
    
    let organizations = await Organizations.findAll({
       
        where: {
            org_id: req.params.id
        }
    });


    res.status(200).send(organizations);
}

const getallDistricts = async (req, res) => {
    let organizations = await Organizations.findAll({
        attributes: ['org_id', 'org_name', 'org_city' , 'org_district','org_location','org_base_category'],
    
        where: {
            org_district: req.params.id
        }
    }); 
    res.status(200).send(organizations);
}





module.exports = { getallCategories, getallDistricts };