const Category = require("../models/Category");

const findAllCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw new Error(error);
  }
};

const createCategory = async (category) => {
  try {
    const newCategory = await Category.create({ category });
    return newCategory;
  } catch (error) {
    throw new Error(error);
  }
};

const findAndDeleteCategory = async (id) => {
  try {
    const categoryDeleted = await Category.findOneAndDelete(id);
    return categoryDeleted;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { findAllCategories, createCategory, findAndDeleteCategory };
