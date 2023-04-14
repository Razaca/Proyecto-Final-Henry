const {
  findAllProducts,
  findProductById,
  createProduct,
  findAndDelete,
  updateProduct,
  findProductsByFilter,
} = require("../controllers/product.controller");

const getProducts = async (req, res) => {
  try {
    const data = await findAllProducts();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await findProductById(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const postProduct = async (req, res) => {
  const { name, description, category, price, color, size, gender, image } =
    req.body;
  try {
    const data = await createProduct({
      name,
      description,
      category,
      price,
      color,
      size,
      gender,
      image,
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await findAndDelete(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const putProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, price, color, size, gender, image } =
    req.body;
  try {
    const data = await updateProduct(id, {
      name,
      description,
      category,
      price,
      color,
      size,
      gender,
      image,
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

const getFilterProduct = async (req, res) => {
  const { category, color, size, gender } = req.query;
  try {
    const products = await findProductsByFilter(category, color, size, gender);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

module.exports = {
  getProducts,
  postProduct,
  getProductById,
  deleteProduct,
  putProduct,
  getFilterProduct,
};
