const { createUser, getUserByEmail } = require("../queries/user.queries");

exports.createUser = async (req, res) => {
  try {
    const body = req.body;
    await createUser(body)
      .then((result) => res.send(result))
      .catch((error) => res.send(error));
  } catch (error) {
    console.log(error);
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const user = await getUserByEmail(userEmail);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
