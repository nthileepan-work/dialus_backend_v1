module.exports = (sequelize, Sequelize) => {
    const FreeListings = sequelize.define('free_listings', {
        org_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        org_name: {
            type: Sequelize.STRING,
            allowNull: false // Ensure organization name is required
        },
        org_seo_url: {
            type: Sequelize.STRING
        },
        org_city: {
            type: Sequelize.INTEGER,
            references: {
                model: 'cities', // Assuming you have a cities table
                key: 'city_id'   // Reference key in the cities table
            }
        },
        org_district: {
            type: Sequelize.INTEGER,
            references: {
                model: 'districts', // Assuming you have a districts table
                key: 'district_id'  // Reference key in the districts table
            }
        },
        org_location: {
            type: Sequelize.STRING
        },
        org_base_category: {
            type: Sequelize.STRING
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
        org_contact: {
            type: Sequelize.INTEGER,
            references: {
                model: 'contacts', // Assuming you have a contacts table
                key: 'contact_id'  // Reference key in the contacts table
            }
        }
    }, {
        timestamps: false
    });

    return FreeListings;
};
