const {
  createUser,
  getUserByEmail,
} = require("../controllers/users.controller");
const express = require("express");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", getUserByEmail);

module.exports = router;
