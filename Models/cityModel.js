const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const City = sequelize.define(
  "City",
  {
    city_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city_district: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "District",
        key: "district_id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "cities",
  }
);

module.exports = City;
