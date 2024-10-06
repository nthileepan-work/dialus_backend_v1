module.exports = (sequelize, Sequelize) => {
    const CategoryOrganizations = sequelize.define('category__organizations', {
        cat_org_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true // Correct placement of unique constraint
        },
        cate_id: {
            type: Sequelize.INTEGER,
            allowNull: false, // Consider making this required
            references: { // Correcting the reference property
                model: 'categories',
                key: 'cate_id'
            }
        },
        org_id: {
            type: Sequelize.INTEGER,
            allowNull: false, // Consider making this required
            references: { // Correcting the reference property
                model: 'organizations',
                key: 'org_id'
            }
        }
    }, {
        timestamps: false // Disable createdAt and updatedAt fields
    });

    return CategoryOrganizations;
};
