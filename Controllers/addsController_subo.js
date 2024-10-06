const db = require('../models/index_subo');


//create main model
const Adds = db.adds;

//main work


//get all data
const getallController = async (req, res) => {
    
    let adds = await Adds.findAll();


    res.status(200).send(adds);
}

module.exports = { getallController }