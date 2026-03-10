const router = require("express").Router();
const { createStudent, getStudents } = require("../controllers/studentController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post("/", auth, role("parent"), createStudent);
router.get("/", auth, role("parent"), getStudents);

module.exports = router;