const postFeedback = (req, res) => {
  console.log("PostFeedback Headers", req.headers);
  console.log("PostFeedback Body", req.body);

  setTimeout(() => {
    res.json({ success: true, data: req.body });
  }, 10000);
  
}

module.exports = { postFeedback };