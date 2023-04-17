const Color = require("../models/Color");

const findAllColors = async () => {
  try {
    const colors = await Color.find();
    return colors;
  } catch (error) {
    throw new Error(error);
  }
};

const createColor = async (name, code) => {
  try {
    const newColor = await Color.create({ name, code });
    return newColor;
  } catch (error) {
    throw new Error(error);
  }
};

const findAndDeleteColor = async (id) => {
  try {
    const deletedColor = await Color.findByIdAndDelete(id);
    if (!deletedColor) {
      throw new Error("No encontrado");
    }
    return {
      message: "Color eliminado satisfactoriamente",
      color: deletedColor,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  findAllColors,
  createColor,
  findAndDeleteColor,
};
