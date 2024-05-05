const User = require("../models/Users");

exports.createUser = (body) => {
  const user = new User(body);
  return user.save();
};

exports.getUserByEmail = (email) => {
  return User.findOne({ email: email });
};
