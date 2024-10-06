const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const FreeListing = sequelize.define('FreeListing', {
    org_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    org_name: DataTypes.STRING,
    org_seo_url: DataTypes.STRING,
    org_city: DataTypes.INTEGER,
    org_district: DataTypes.INTEGER,
    org_location: DataTypes.STRING,
    org_base_category: DataTypes.STRING,
    org_description: DataTypes.STRING,
    org_created_date: DataTypes.DATE,
    org_update_date: DataTypes.DATE,
    org_contact: DataTypes.STRING
}, { tableName: 'free_listings', timestamps: false });

module.exports = FreeListing;
