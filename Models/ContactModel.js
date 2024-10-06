const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Contact = sequelize.define('Contact', {
    contact_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    org_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    value: DataTypes.STRING
}, {
    tableName: 'contacts',
    timestamps: false
});

module.exports = Contact;
