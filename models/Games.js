const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  price: String,
  rating: String,
  image: String,
});

//Exports
const GameModel = mongoose.model("games", gameSchema);
module.exports = GameModel;
