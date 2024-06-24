const userService = require('../services/userService');
const userValidator = require('../validators/userValidator');

const createUser = async (req, res) => {
  const { error } = userValidator.validateCreateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await userService.createUser(req.body);
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.userId);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  const { error } = userValidator.validateUpdateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await userService.updateUser(req.params.userId, req.body);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await userService.deleteUser(req.params.userId);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser
};
