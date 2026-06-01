const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  getCategoryById,
} = require("../controllers/feedbackController");

router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);

module.exports = router;