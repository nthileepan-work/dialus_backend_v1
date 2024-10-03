const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Organization = sequelize.define(
  "Organization",
  {
    org_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    org_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    org_seo_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    org_city: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: "City",
        key: "city_id",
      },
    },
    org_district: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "District",
        key: "district_id",
      },
    },
    org_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    org_base_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    org_description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "organizations",
  }
);

module.exports = Organization;
