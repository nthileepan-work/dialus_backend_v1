const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Offers model
const Offers = sequelize.define('offers', {
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
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  timestamps: false, // Disable createdAt and updatedAt fields
});

module.exports = Offers;
