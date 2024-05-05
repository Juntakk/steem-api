const {
  getAll,
  create,
  deleteGame,
  getById,
  update,
} = require("../queries/game.queries");

exports.allGames = async (req, res) => {
  try {
    const games = await getAll();
    res.send(games);
  } catch (error) {
    console.log(error);
  }
};

exports.updateGame = async (req, res) => {
  const gameId = req.params.id;
  const game = req.body;
  try {
    res.send(await update(gameId, game));
  } catch (error) {
    console.log(error);
  }
};

exports.createGame = async (req, res) => {
  const body = req.body;
  try {
    res.send(await create(body));
  } catch (error) {
    console.log(error);
  }
};

exports.deleteGameById = async (req, res) => {
  const gameId = req.params.id;
  try {
    res.send(await deleteGame(gameId));
  } catch (error) {
    console.log(error);
  }
};

exports.getGameById = async (req, res) => {
  const gameId = req.params.id;
  try {
    res.send(await getById(gameId));
  } catch (error) {
    console.log(error);
  }
};
