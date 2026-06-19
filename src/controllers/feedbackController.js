const { createFeedback } = require("../services/feedback");

const postFeedback = async (req, res) => {
  try {
    const feedback = req.body?.map(({ qId, value }) => ({ qId, value })) || [];
    
    const result = await createFeedback({
      customerSlug: req.headers["customer-slug"],
      feedback,
    });
    
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { postFeedback };