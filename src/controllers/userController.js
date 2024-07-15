const userModel = require("../models/userModel");

module.exports.readAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    if (users.length === 0) {
      res.status(404).json({ message: "No users found" });
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.readUserById = async (req, res) => {
  const { user_id } = req.params;
  const data = { user_id };
  try {
    const user = await userModel.getUserById(data);
    if (user.length === 0) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
