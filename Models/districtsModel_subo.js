module.exports = (sequelize, Sequelize) => {
    const Districts = sequelize.define('districts', {
        district_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        district_name: {
            type: Sequelize.STRING,
            allowNull: false, // Ensure that the district name is required
            unique: true // Optionally ensure that district names are unique
        },
        district_image: {
            type: Sequelize.STRING,
            allowNull: true // This can be nullable if not required
        }
    }, {
        timestamps: false // Disable createdAt and updatedAt fields
    });

    return Districts;
};
