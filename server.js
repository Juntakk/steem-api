const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gameRoutes = require("./routes/game.routes");
const userRoutes = require("./routes/user.routes");
const path = require("path");
const MONGO_URI =
  "mongodb+srv://juntakk:Password123!@games.oxleerl.mongodb.net/?retryWrites=true&w=majority&appName=games";
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI);
const PORT = process.env.PORT || 5000;

app.use("/games", gameRoutes);
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
