const {
  allGames,
  createGame,
  getGameById,
  deleteGameById,
  updateGame,
} = require("../controllers/games.controller");

const express = require("express"); // Import Express
const router = express.Router(); // Create a new router instance

router.get("/", allGames);
router.post("/", createGame);
router.patch("/:id", updateGame);
router.get("/:id", getGameById);
router.delete("/:id", deleteGameById);

module.exports = router;
