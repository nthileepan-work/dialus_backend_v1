const { Op } = require("sequelize");
const { Category, Organization, District } = require("../Models");

const searchCategoriesAndOrganizations = async (req, res) => {
  try {
    const { districtId, searchQuery, limit = 10, offset = 0 } = req.query;

    if (!searchQuery) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // If districtId is provided, limit results by district
    const districtCondition = districtId ? { org_district: districtId } : {};

    // Search organizations based on the query and district with pagination
    const organizations = await Organization.findAndCountAll({
      where: {
        ...districtCondition, // Add district condition only if districtId is present
        org_name: { [Op.like]: `%${searchQuery}%` }, // Search organizations by name
      },
      include: [
        {
          model: Category,
          attributes: ["cate_id", "cate_name"],
        },
      ],
      limit: parseInt(limit), // Set limit for pagination
      offset: parseInt(offset), // Set offset for pagination
    });

    // Search categories based on the query and district with pagination
    const categories = await Category.findAndCountAll({
      where: {
        cate_name: { [Op.like]: `%${searchQuery}%` }, // Search categories by name
      },
      include: [
        {
          model: Organization,
          where: districtCondition, // Filter by district if provided
          required: false, // If no organizations exist in this category, don't omit it
        },
      ],
      limit: parseInt(limit), // Set limit for pagination
      offset: parseInt(offset), // Set offset for pagination
    });

    res.status(200).json({
      categories: {
        rows: categories.rows,
        count: categories.count,
      },
      organizations: {
        rows: organizations.rows,
        count: organizations.count,
      },
    });
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  searchCategoriesAndOrganizations,
};
