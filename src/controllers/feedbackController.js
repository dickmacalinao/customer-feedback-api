const { getCategories } = require( "../services/categories");

// GET /api/:customerSlug/categories
const getAllCategories = (req, res) => {
  getCategories(
    {
      customerSlug: req.params?.customerSlug,
      customerActive: true,
    }
  ).then((data) => {
    res.json({ success: true, count: data.length, data: data });
  })
};

// GET /api/:customerSlug/categories/:id
const getCategoryById = (req, res) => {
  getCategories(
    {
      customerSlug: req.params?.customerSlug,
      customerActive: true,
      categoryId: req.params.id,
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