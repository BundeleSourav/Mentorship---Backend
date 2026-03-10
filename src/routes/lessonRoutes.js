const router = require("express").Router();
const { createLesson, getLessons } = require("../controllers/lessonController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post("/", auth, role("mentor"), createLesson);
router.get("/", auth, getLessons);

module.exports = router;