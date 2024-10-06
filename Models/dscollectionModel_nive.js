const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Dscollection = sequelize.define('dscollection', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // This makes 'id' the primary key
        autoIncrement: true, // Automatically increments the ID
    },
    heading: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descriptions: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    href: {
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

module.exports = Dscollection;
