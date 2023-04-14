const {
  findAllUsers,
  createUser,
  findAndDeleteUser,
} = require("../controllers/user.controller");

const getUsers = async (req, res) => {
  try {
    const data = await findAllUsers();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const postUser = async (req, res) => {
  const { username, fullname, address, email, password } = req.body;
  try {
    const data = await createUser({
      username,
      fullname,
      address,
      email,
      password,
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await findAndDeleteUser(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

module.exports = { getUsers, postUser, deleteUser };
