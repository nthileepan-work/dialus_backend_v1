module.exports = (sequelize, Sequelize) => {
    const Cities = sequelize.define('cities', {
        city_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        city_name: {
            type: Sequelize.STRING,
            allowNull: false // Correcting the property for nullability
        },
        city_district: {
            type: Sequelize.INTEGER,
            allowNull: false, // Ensuring city_district is required
            references: { // Correcting the reference property
                model: 'districts',
                key: 'district_id'
            }
        },
        city_status: {
            type: Sequelize.INTEGER,
            allowNull: false // Correcting the property for nullability
        }
    }, {
        timestamps: false // Disable createdAt and updatedAt fields
    });

    return Cities;
};
