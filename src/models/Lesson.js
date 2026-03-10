const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({

  title: String,

  description: String,

  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  duration: Number

}, { timestamps: true });

module.exports = mongoose.model("Lesson", lessonSchema);