const Category = require("../models/Category");

const findAllCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw new Error(error);
  }
};

const createCategory = async (name) => {
  try {
    const newCategory = await Category.create({ name });
    return newCategory;
  } catch (error) {
    throw new Error(error);
  }
};

const findAndDeleteCategory = async (id) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      throw new Error("No encontrado");
    }
    return {
      message: "Color eliminado satisfactoriamente",
      category: deletedCategory,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { findAllCategories, createCategory, findAndDeleteCategory };
