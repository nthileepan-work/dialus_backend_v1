const Category = require('../Models/category_thi');
const { Op } = require('sequelize');

// Get all categories or search by keyword
const getCategories = async (req, res) => {
    try {
        const { keyword } = req.query;
        let categories;

        if (keyword) {
            const words = keyword.split(' ');
            const conditions = words.map(word => ({
                cate_name: {
                    [Op.like]: `%${word}%`
                }
            }));

            categories = await Category.findAll({
                where: {
                    [Op.or]: conditions
                }
            });

            if (categories.length === 0) {
                categories = await Category.findAll();
            }
        } else {
            categories = await Category.findAll();
        }

        res.json(categories);
    } catch (error) {
        console.error("Error fetching categories: ", error);
        res.status(500).send("An error occurred");
    }
};

const getFiltered = async (req, res) => {
    const { name } = req.query;

    try {
        let whereClause = {};

        // If there's a name, extract keywords and suggest related categories
        if (name) {
            const keywords = name.toLowerCase().split(' ').map(keyword => `%${keyword}%`);
            whereClause = {
                cate_name: {
                    [Op.or]: keywords.map(keyword => ({
                        [Op.like]: keyword
                    }))
                }
            };
        }

        // Fetch categories based on the where clause
        const categories = await Category.findAll({
            where: whereClause
        });

        // Return the filtered categories
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'An error occurred while fetching categories.' });
    }
};

// Get category by ID
const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);

        if (category) {
            res.json(category);
        } else {
            res.status(404).send("Category not found");
        }
    } catch (error) {
        console.error("Error fetching category: ", error);
        res.status(500).send("An error occurred");
    }
};

module.exports = {
    getCategories,
    getCategoryById,
    getFiltered
};
