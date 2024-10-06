// db.js (in the config folder)
const { Sequelize } = require('sequelize');

// Set up a connection to MySQL
const sequelize = new Sequelize('sample_db1', 'pineappleai', 'Lakshansql@1991', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    port: 3306
});

// Export the sequelize instance
module.exports = sequelize;












// // // db.js (in the config folder)
// const { Sequelize } = require('sequelize');

// // Set up a connection to MySQL
// const sequelize = new Sequelize('sample_db1', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false,
//     port: 3308
// });

// // Export the sequelize instance
// module.exports = sequelize;