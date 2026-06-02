const postFeedback = (req, res) => {
  console.log("PostFeedback", req);
  res.json({ success: true, data: req });
}

module.exports = { postFeedback };