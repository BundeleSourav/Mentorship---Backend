const Student = require("../models/Student");

exports.createStudent = async (req, res) => {

  const student = await Student.create({
    ...req.body,
    parent: req.user.id
  });

  res.json(student);

};

exports.getStudents = async (req, res) => {

  const students = await Student.find({ parent: req.user.id });

  res.json(students);

};