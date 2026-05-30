const { categories } = require( "../data/categories");

// GET /api/questions
const getAllQuestions = (req, res) => {

  const { category } = req.query;

  let result = [];

  categories.forEach((c) => {
    if (parseInt(category) === c.id || !category) {
      c.questions.forEach((q) => {
        result = [...result, q];
      })
    }
  })

  res.json({ success: true, count: result.length, data: result });
};


module.exports = { getAllQuestions };