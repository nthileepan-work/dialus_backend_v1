const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
    cate_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    cate_name: DataTypes.STRING,
    cate_seo_url: DataTypes.STRING,
    cate_status: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
}, {
    tableName: 'categories',
    timestamps: false 
});

module.exports = Category;
