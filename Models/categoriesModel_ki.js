//const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes from sequelize package
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Import the db connection

// Define Category model with fields and constraints
const Category = sequelize.define('Category', {
  cate_id: {
    type: DataTypes.INTEGER, // Define cate_id as an integer
    primaryKey: true, // Set cate_id as the primary key
    autoIncrement: true, // Enable auto-increment for cate_id
  },
  cate_name: {
    type: DataTypes.STRING, // Define cate_name as a string
    allowNull: false, // Do not allow null values for cate_name
    validate: {
      len: [1, 255], // cate_name must be between 1 and 255 characters
    },
  },
  cate_seo_url: {
    type: DataTypes.STRING, // Define cate_seo_url as a string
    allowNull: true, // Allow null values for cate_seo_url
  },
  cate_status: {
    type: DataTypes.INTEGER, // Define cate_status as an integer
    allowNull: false, // Do not allow null values for cate_status
    defaultValue: 1, // Set default value of cate_status to 1
  },
}, {
  timestamps: false, // Disable automatic creation of createdAt and updatedAt fields
  tableName: 'categories', // Set the table name to 'categories'
});

module.exports = Category; // Export the Category model for use in other parts of the application
