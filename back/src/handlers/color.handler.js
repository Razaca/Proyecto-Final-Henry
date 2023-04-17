const {
  findAllColors,
  createColor,
  findAndDeleteColor,
} = require("../controllers/color.controller.js");

const getColors = async (req, res) => {
  try {
    const data = await findAllColors();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const postColor = async (req, res) => {
  const { name, code } = req.body;
  try {
    const data = await createColor(name, code);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const deleteColor = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await findAndDeleteColor(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

module.exports = {
  getColors,
  postColor,
  deleteColor,
};
