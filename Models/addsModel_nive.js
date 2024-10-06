const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Adds = sequelize.define('adds', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // This makes 'id' the primary key
        autoIncrement: true, // Automatically increments the ID
    },
    Org_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Logo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    href_link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 0, // Set default value to 0
    },
}, {
    
    timestamps: false, // This will add createdAt and updatedAt timestamps
});

module.exports = Adds;
