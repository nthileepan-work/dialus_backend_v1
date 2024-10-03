const Category = require("./categoriesModel");
const Organization = require("./organizationsModel");
const CategoryOrganization = require("./category_organizationsModel");
const District = require("./districtModel");
const City = require("./cityModel");

// Define relationships

// Many-to-Many relationship between Category and Organization through CategoryOrganization
Category.belongsToMany(Organization, {
  through: CategoryOrganization,
  foreignKey: "cate_id",
});
Organization.belongsToMany(Category, {
  through: CategoryOrganization,
  foreignKey: "org_id",
});

// One-to-Many relationship between District and Organization
Organization.belongsTo(District, { foreignKey: "org_district" });
District.hasMany(Organization, { foreignKey: "org_district" });

// One-to-Many relationship between City and Organization
Organization.belongsTo(City, { foreignKey: "org_city" });
City.hasMany(Organization, { foreignKey: "org_city" });

module.exports = {
  Category,
  Organization,
  CategoryOrganization,
  District,
  City,
};
