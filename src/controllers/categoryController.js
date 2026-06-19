const { getCategories } = require("../services/category");

const BASE_QUERY = {
  customerActive: true,
  categoryActive: true,
  questionActive: true,
};

const getCustomerSlug = (req) => req.headers["customer-slug"];

const handleError = (res, error, statusCode = 500) => {
  console.error(error);
  res.status(statusCode).json({ success: false, error: "Server error" });
};

// GET /api/:customerSlug/categories
const getAllCategories = async (req, res) => {
  try {
    const data = await getCategories({
      ...BASE_QUERY,
      customerSlug: getCustomerSlug(req),
    });
    res.json({ success: true, count: data.length, data });
  } catch (error) {
    handleError(res, error);
  }
};

// GET /api/:customerSlug/categories/:id
const getCategoryById = async (req, res) => {
  try {
    const data = await getCategories({
      ...BASE_QUERY,
      customerSlug: getCustomerSlug(req),
      categoryId: req.params.id,
    });
    if (data.length > 0) {
      res.json({ success: true, data: data[0] });
    } else {
      handleError(res, "Category not found", 404);
    }
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getAllCategories, getCategoryById };