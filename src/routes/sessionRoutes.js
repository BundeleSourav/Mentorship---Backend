const router = require("express").Router();
const { startSession, endSession } = require("../controllers/sessionController");

const auth = require("../middleware/authMiddleware");

router.post("/start", auth, startSession);
router.post("/end/:id", auth, endSession);

module.exports = router;