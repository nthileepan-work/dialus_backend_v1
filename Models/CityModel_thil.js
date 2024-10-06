const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const City = sequelize.define('City', {
    city_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    city_name: {
        type: DataTypes.STRING
    },
    city_district: {
        type: DataTypes.INTEGER
    },
    city_status: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'cities',
    timestamps: false
});

module.exports = City;
