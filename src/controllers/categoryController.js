const { categories } = require( "../data/categories");

// GET /api/categories
const getAllCategories = (req, res) => {
  res.json({ success: true, count: categories.length, data: categories });
};

// GET /api/categories/:id
const getCategoryById = (req, res) => {
  const category = categories.find((c) => c.id === parseInt(req.params.id));
  if (!category) {
    return res.status(404).json({ success: false, error: "Category not found" });
  }
  res.json({ success: true, data: category });
};

module.exports = { getAllCategories, getCategoryById };