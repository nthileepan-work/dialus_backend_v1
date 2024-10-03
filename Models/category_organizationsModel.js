const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const CategoryOrganization = sequelize.define(
  "CategoryOrganization",
  {
    cat_org_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Category",
        key: "cate_id",
      },
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Organization",
        key: "org_id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "category__organizations",
  }
);

module.exports = CategoryOrganization;
