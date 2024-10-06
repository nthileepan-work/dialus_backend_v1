const db = require('../Models/index_subo');


//create main model
const Category__Organizations = db.category__organizations;

//main work


//get all data
const getallController = async (req, res) => {
    
    let category__organizations = await Category__Organizations.findAll();


    res.status(200).send(category__organizations);
}

module.exports = { getallController }