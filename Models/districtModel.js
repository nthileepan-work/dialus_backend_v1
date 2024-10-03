const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const District = sequelize.define(
  "District",
  {
    district_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    district_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "districts",
  }
);

module.exports = District;
