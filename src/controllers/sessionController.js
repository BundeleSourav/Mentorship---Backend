const Session = require("../models/Session");

exports.startSession = async (req, res) => {

  const session = await Session.create({
    ...req.body,
    startedAt: new Date()
  });

  res.json(session);

};

exports.endSession = async (req, res) => {

  const session = await Session.findByIdAndUpdate(
    req.params.id,
    { endedAt: new Date() },
    { new: true }
  );

  res.json(session);

};