const { Sequelize } = require('sequelize');
const sequelize = require('../config/db.js');

// Import Models
const categories = require('./categoriesModel_subo.js');
const organizations = require('./organizationsModel_subo.js');
const cities = require('./citiesModel_subo.js');
const districts = require('./districtsModel_subo.js');
const adds = require('./addsModel_subo.js');
const free_listings = require('./freeListingsModel_subo.js');
const contacts = require('./contactModel_subo.js');
const category__organizations = require('./category__organizationsModel_subo.js');

// Initialize Sequelize
// const sequelize = new Sequelize(
//     dbConfig.DB, 
//     dbConfig.USER, 
//     dbConfig.PASSWORD,
//     dbConfig.PORT, {
//         host: dbConfig.HOST,
//         dialect: dbConfig.dialect,
//         operatorsAliases: false,
//     }
// );

// Authenticate connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Define models
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Initialize models
db.categories = categories(sequelize, Sequelize);
db.organizations = organizations(sequelize, Sequelize);
db.cities = cities(sequelize, Sequelize);
db.districts = districts(sequelize, Sequelize);
db.adds = adds(sequelize, Sequelize);
db.free_listings = free_listings(sequelize, Sequelize);
db.contacts = contacts(sequelize, Sequelize);
db.category__organizations = category__organizations(sequelize, Sequelize);

// Define associations
db.categories.belongsToMany(db.organizations, { through: db.category__organizations, foreignKey: 'cate_id' });
db.organizations.belongsToMany(db.categories, { through: db.category__organizations, foreignKey: 'org_id' });

db.organizations.belongsTo(db.cities, { foreignKey: 'org_city' });
db.organizations.hasMany(db.contacts, { foreignKey: 'org_id' });
db.cities.hasMany(db.organizations, { foreignKey: 'org_city' });
db.organizations.belongsTo(db.category__organizations, { foreignKey: 'org_base_category' });

db.organizations.belongsTo(db.districts, { foreignKey: 'org_district' });
db.districts.hasMany(db.organizations, { foreignKey: 'org_district' });

db.category__organizations.belongsTo(db.categories, { foreignKey: 'cate_id' });
db.category__organizations.belongsTo(db.organizations, { foreignKey: 'org_id' });

db.cities.belongsTo(db.districts, { foreignKey: 'city_district' });

db.contacts.belongsTo(db.organizations, { foreignKey: 'org_id' });

db.free_listings.belongsTo(db.organizations, { foreignKey: 'org_id' });
db.free_listings.belongsTo(db.cities, { foreignKey: 'org_city' });
db.free_listings.belongsTo(db.districts, { foreignKey: 'org_district' });
db.free_listings.hasMany(db.contacts, { foreignKey: 'org_id' });
db.free_listings.belongsTo(db.categories, { foreignKey: 'org_base_category' });

// Sync database
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized successfully.');
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });

// Export models
module.exports = db;
