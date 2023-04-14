const User = require("../models/User");

const findAllUsers = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async (newUser) => {
  try {
    const user = await User.create(newUser);
    user.password = await user.encryptPassword(user.password);
    await user.save();
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const findAndDeleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { findAllUsers, createUser, findAndDeleteUser };
