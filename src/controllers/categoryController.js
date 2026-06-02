const { getCategories } = require( "../services/category");

// GET /api/:customerSlug/categories
const getAllCategories = (req, res) => {
  getCategories(
    {
      customerSlug: req.headers["customer-slug"],
      customerActive: true,
      categoryActive: true,
      questionActive: true,
    }
  ).then((data) => {
    res.json({ success: true, count: data.length, data: data });
  })
};

// GET /api/:customerSlug/categories/:id
const getCategoryById = (req, res) => {
  getCategories(
    {
      customerSlug: req.headers["customer-slug"],
      customerActive: true,
      categoryId: req.params.id,
      categoryActive: true,
      questionActive: true,
    }
  ).then((data) => {
    if (data.length > 0) {
      res.json({ success: true, data: data[0] });
    } else {
      return res.status(404).json({ success: false, error: "Category not found" });
    }
  })
};

module.exports = { getAllCategories, getCategoryById };