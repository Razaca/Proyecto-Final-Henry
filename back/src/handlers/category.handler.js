const {
  findAllCategories,
  createCategory,
  findAndDeleteCategory,
} = require("../controllers/category.controller.js");

const getCategories = async (req, res) => {
  try {
    const data = await findAllCategories();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const postCategory = async (req, res) => {
  const { category } = req.body;
  try {
    const data = await createCategory(category);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await findAndDeleteCategory(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

module.exports = { getCategories, postCategory, deleteCategory };
