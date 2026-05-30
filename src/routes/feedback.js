const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  getCategoryById,
} = require("../controllers/feedbackController");

router.get("/:customerSlug/categories", getAllCategories);
router.get("/:customerSlug/categories/:id", getCategoryById);

module.exports = router;