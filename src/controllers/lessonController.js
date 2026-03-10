const Lesson = require("../models/Lesson");

exports.createLesson = async (req, res) => {

  const lesson = await Lesson.create({
    ...req.body,
    mentor: req.user.id
  });

  res.json(lesson);

};

exports.getLessons = async (req, res) => {

  const lessons = await Lesson.find().populate("mentor");

  res.json(lessons);

};