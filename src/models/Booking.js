const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },

  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson"
  },

  date: Date,

  status: {
    type: String,
    default: "booked"
  }

}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);