const Category = require('../Models/categoriesModel_ki'); // Adjust the path if needed
const { Op } = require('sequelize');
// Get paginated categories where cate_status is 1 (only cate_id and cate_name)
exports.getCategories = async (req, res) => {
  let { limit = 20, offset = 0 } = req.query; // Default to 20 categories initially and offset starts at 0

  // Ensure limit and offset are numbers
  limit = parseInt(limit);//parseInt() is used to convert a string into an integer 
  offset = parseInt(offset);

  try {
    const categories = await Category.findAll({
      attributes: ['cate_id', 'cate_name'], // Only fetch cate_id and cate_name
      where: { cate_status: 1 }, // Only active categories
      limit, // Limit the number of results
      offset, // Skip the first `offset` results
    });

    res.status(200).json(categories); // Send the categories as a JSON response
  } catch (error) {
    console.error('Error retrieving categories:', error); // Log the error to the console
    res.status(500).json({ message: 'Internal server error' }); // Send a 500 response
  }
};

exports.getCategorieSearch = async (req, res) => {
  let { limit = 20, offset = 0, search = '' } = req.query;

  // Ensure limit and offset are numbers
  limit = parseInt(limit);
  offset = parseInt(offset);

  try {
    const categories = await Category.findAll({
      attributes: ['cate_id', 'cate_name'], // Fetch only required fields
      where: {
        cate_status: 1, // Only fetch active categories
        cate_name: { 
          [Op.like]: `%${search}%` // Match category names based on search query
        }
      },
      limit,
      offset,
    });

    res.status(200).json(categories); // Send categories as JSON response
  } catch (error) {
    console.error('Error retrieving categories:', error); // Log the error
    res.status(500).json({ message: 'Internal server error hello' }); // 500 response for server error
  }
};

// Get a single category by ID where cate_status is 1 (only cate_id and cate_name)
exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the request parameters

    // Validate ID
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ message: 'Invalid category ID' }); // 400 Bad Request
    }

    const category = await Category.findOne({
      attributes: ['cate_id', 'cate_name'], // Fetch only cate_id and cate_name fields
      where: { cate_id: id, cate_status: 1 }, // Find by ID and cate_status = 1
    });

    if (category) {
      res.status(200).json(category); // Send category if found
    } else {
      res.status(404).json({ message: 'Category not found or inactive' }); // 404 Not Found if not found or inactive
    }
  } catch (error) {
    console.error('Error retrieving category:', error); // Log the error
    res.status(500).json({ message: 'Internal server error' }); // Send 500 response
  }
};

/*Convert from string to number: When you get a number in the form of a string (like from user input, URL, or API), you need to convert it to an integer for calculations.

Example: parseInt("123") converts the string "123" to the number 123.*/