const db = require('../Models/index_subo');


//create main model
const Categories = db.categories;

//main work


//get all data
const getallController = async (req, res) => {
    
    let categories = await Categories.findAll({
        attributes: ['cate_id', 'cate_name']  });


    res.status(200).send(categories);
}

module.exports = { getallController }