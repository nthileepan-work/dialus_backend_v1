module.exports = (sequelize, Sequelize) => {
    const Adds = sequelize.define('adds', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        org_name: { // Changed to lowercase to follow naming conventions
            type: Sequelize.STRING,
            allowNull: false // Consider making this required
        },
        logo: { // Changed to lowercase to follow naming conventions
            type: Sequelize.STRING,
            allowNull: true // Optional field
        },
        href_link: {
            type: Sequelize.STRING,
            allowNull: true // Optional field
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false // Consider making this required
        }
    }, {
        timestamps: false // Disable createdAt and updatedAt fields
    });

    return Adds;
};
