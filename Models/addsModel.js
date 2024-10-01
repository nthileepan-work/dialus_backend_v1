// adds.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Import the db connection

// Define the Adds model
const adds = sequelize.define('adds', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Org_name: {
        type: DataTypes.STRING,
        allowNull: false,  // Org_name should not be null
    },
    Logo: {
        type: DataTypes.STRING,
        allowNull: false,  // Logo URL should not be null
    },
    href_link: {
        type: DataTypes.STRING,
        allowNull: false,  // Href link should not be null
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,  // Default status is 1 (visible)
    },
}, {
    timestamps: false // Disable automatic createdAt and updatedAt fields
});

module.exports = { sequelize, adds };
