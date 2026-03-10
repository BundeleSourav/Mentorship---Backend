const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

  name: String,

  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  age: Number,

  grade: String

}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);