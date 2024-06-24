const userDao = require('../daos/userDao');

const createUser = async (userData) => {
  return await userDao.createUser(userData);
};

const getUserById = async (userId) => {
  return await userDao.getUserById(userId);
};

const getAllUsers = async () => {
  return await userDao.getAllUsers();
};

const updateUser = async (userId, updateData) => {
  return await userDao.updateUser(userId, updateData);
};

const deleteUser = async (userId) => {
  return await userDao.deleteUser(userId);
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser
};
