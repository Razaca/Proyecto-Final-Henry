const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const data = await Product.find();
  res.json(data);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const data = await Product.findById(id);
  res.json(data);
};

const postProduct = async (req, res) => {
  const { name, description, category, price, color, size, gender, image } =
    req.body;
  const data = await Product.create({
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
};

module.exports = { getProducts, postProduct, getProductById };
