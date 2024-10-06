const { where } = require('sequelize');
const db = require('../Models/index_subo');


//create main model
const Contacts = db.contacts;

//main work


//get all data
const getallController = async (req, res) => {
    
    let contacts = await Contacts.findAll();


    res.status(200).send(contacts);
}

const getController = async (req, res) => {
    
    let contacts = await Contacts.findAll({
        where: {
            contact_id: req.params.id,

        }
    });


    res.status(200).send(contacts);
}

module.exports = { getallController, getController }