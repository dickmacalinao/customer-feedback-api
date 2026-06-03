const { createFeedback } = require( "../services/feedback");

const postFeedback = (req, res) => {

  // console.log("PostFeedback Body", req.body);

  let feedback = []
  req.body?.forEach(f => {
    feedback = [...feedback, {qId: f.qId, value: f.value}];
  });

  createFeedback(
    {
      customerSlug: req.headers["customer-slug"],
      feedback,
    }
  ).then((result) => {
    res.json({ success: true, data: result });
  })
  
}

module.exports = { postFeedback };