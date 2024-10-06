module.exports = (sequelize, Sequelize) => {
    const Categories = sequelize.define('categories', {
        cate_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cate_name: {
            type: Sequelize.STRING,
            allowNull: false // Consider making this required
        },
        cate_seo_url: {
            type: Sequelize.STRING,
            allowNull: true // Optional field
        },
        cate_status: {
            type: Sequelize.INTEGER,
            allowNull: false // Consider making this required
        }
    }, {
        timestamps: false // Disable createdAt and updatedAt fields
    });

    return Categories;
};
