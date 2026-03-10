const Booking = require("../models/Booking");

exports.bookLesson = async (req, res) => {

  const booking = await Booking.create(req.body);

  res.json(booking);

};

exports.getBookings = async (req, res) => {

  const bookings = await Booking.find()
    .populate("lesson")
    .populate("student");

  res.json(bookings);

};