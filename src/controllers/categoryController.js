const { categories } = require( "../data/categories");

// GET /api/categories
const getAllCategories = (req, res) => {
  res.json({ success: true, count: categories.length, data: categories });
};


module.exports = { getAllCategories };