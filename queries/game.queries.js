const Game = require("../models/Games");

exports.getAll = () => {
  return Game.find().sort({ price: 1 });
};

exports.getById = (id) => {
  return Game.findById(id);
};

exports.create = (body) => {
  const game = new Game(body);
  return game.save();
};

exports.deleteGame = (id) => {
  return Game.findByIdAndDelete(id).exec();
};

exports.update = (id, game) => {
  return Game.findByIdAndUpdate(id, { $set: game });
};
