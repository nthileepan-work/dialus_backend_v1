module.exports = (sequelize, Sequelize) => {
    const organizations = sequelize.define('organizations', {
        org_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        org_name: {
            type: Sequelize.STRING
        },
        org_seo_url: {
            type: Sequelize.STRING
        },
        org_city: {
            type: Sequelize.INTEGER,
            references: {  // Change Reference to references
                model: 'cities',
                key: 'city_id'
            }
        },
        org_district: {
            type: Sequelize.INTEGER,
            references: {  // Change Reference to references
                model: 'districts',
                key: 'district_id'
            }
        },
        org_location: {
            type: Sequelize.STRING
        },
        org_base_category: {
            type: Sequelize.STRING,
            references: {  // Change Reference to references
                model: 'categories',
                key: 'cate_id'
            }
        },
        org_latitude: {
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        org_longtitude: {  
            type: Sequelize.DOUBLE,
            allowNull: true
        },
        org_description: {
            type: Sequelize.STRING
        },
        org_created_date: {
            type: Sequelize.DATE
        },
        org_update_date: {
            type: Sequelize.DATE
        },
        org_status: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });

    return organizations;
};
