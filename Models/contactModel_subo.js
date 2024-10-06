module.exports = (sequelize, Sequelize) => {
    const Contacts = sequelize.define('contacts', {
        contact_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        org_id: {
            type: Sequelize.INTEGER,
            allowNull: false, // Ensure that org_id is required
            references: { // Correcting the reference property
                model: 'organizations',
                key: 'org_id'
            }
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false // Correcting the property for nullability
        },
        value: {
            type: Sequelize.STRING,
            allowNull: false // Correcting the property for nullability
        }
    }, {
        timestamps: false // Disable createdAt and updatedAt fields
    });
    
    return Contacts;
};
