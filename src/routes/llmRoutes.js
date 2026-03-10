const router = require("express").Router();
const { askMentorAI } = require("../controllers/llmController");

router.post("/ask", askMentorAI);

module.exports = router;