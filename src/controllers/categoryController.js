const { getCategories } = require( "../services/categories");

// GET /api/categories
const getAllCategories = (req, res) => {
  getCategories().then((data) => {
    console.log('data', data);
    res.json({ success: true, count: data.length, data: data });
  })
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