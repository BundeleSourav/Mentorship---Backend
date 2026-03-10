const { askAI } = require("../services/llmService");

exports.askMentorAI = async (req, res) => {

  const { question } = req.body;

  const answer = await askAI(question);

  res.json({ answer });

};