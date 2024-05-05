const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
