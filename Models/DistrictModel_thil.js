const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const District = sequelize.define('District', {
    district_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    district_name: {
        type: DataTypes.STRING
    },
    district_image: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'districts',
    timestamps: false
});

module.exports = District;
