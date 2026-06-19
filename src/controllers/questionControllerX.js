const { categories } = require( "../data/categories");

// GET /api/questions
const getAllQuestions = (req, res) => {
  const { category } = req.query;
  const categoryId = category ? parseInt(category) : null;

  const result = categories
    .filter((c) => !categoryId || c.id === categoryId)
    .flatMap((c) => c.questions);

  res.json({ success: true, count: result.length, data: result });
};


module.exports = { getAllQuestions };