const router = require("express").Router();
const { bookLesson, getBookings } = require("../controllers/bookingController");

const auth = require("../middleware/authMiddleware");

router.post("/", auth, bookLesson);
router.get("/", auth, getBookings);

module.exports = router;