const db = require('../Models/index_subo');


//create main model
const Districts = db.districts;

//main work


//get all data
const getallController = async (req, res) => {
    
    let districts = await Districts.findAll({
        attributes: ['district_id', 'district_name'],
    
    });


    res.status(200).send(districts);
}
const getController = async (req, res) => {
    
    let districts = await Districts.findAll({
        attributes: ['district_id', 'district_name'],
        where: {district_id: req.params.id},
    
    });


    res.status(200).send(districts);
}

module.exports = { getallController ,getController}