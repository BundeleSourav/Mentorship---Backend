const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({

  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking"
  },

  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },

  startedAt: Date,

  endedAt: Date

}, { timestamps: true });

module.exports = mongoose.model("Session", sessionSchema);