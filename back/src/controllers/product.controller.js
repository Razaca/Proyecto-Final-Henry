const Product = require("../models/Product");

const findAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

const findProductByName = async (productName) => {
  try {
    const regex = new RegExp(productName, "i"); //El modificador 'i' significa "insensible a mayúsculas y minúsculas"
    const products = await Product.find({ name: regex });
    return products;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al buscar el producto por nombre" });
  }
};

const findProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) throw new Error("no encontrado");
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

const findProductsByFilter = async (category, color, size, gender) => {
  try {
    let products = await Product.find();

    if (category) {
      products = products.filter((product) =>
        product.category.includes(category)
      );
    }

    if (color) {
      products = products.filter((product) => product.color.includes(color));
    }

    if (size) {
      products = products.filter((product) => product.size.includes(size));
    }

    if (gender) {
      products = products.filter((product) => product.gender.includes(gender));
    }

    return products;
  } catch (error) {
    throw new Error(error);
  }
};

const findAndDelete = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      throw new Error("No encontrado");
    }
    return {
      message: "Producto eliminado satisfactoriamente",
      product: deletedProduct,
    };
  } catch (error) {
    throw new Error("Error al eliminar");
  }
};

const createProduct = async (product) => {
  const { name, description, category, price, color, size, gender, image } =
    product;
  try {
    if (!name) throw new Error("Inserta un nombre al producto");
    if (!description) throw new Error("Inserta una descripcion al producto");
    if (!category)
      throw new Error("Inserta por lo menos una categoria al producto");
    if (!price) throw new Error("Inserta el precio del producto");
    if (!color) throw new Error("Inserta por lo menos un color al producto");
    if (!size) throw new Error("Inserta por lo menos un talle al producto");

    const newProduct = await Product.create({
      name,
      description,
      category,
      price,
      color,
      size,
      gender,
      image,
    });
    return newProduct;
  } catch (error) {
    throw new Error(error);
  }
};

const updateProduct = async (id, update) => {
  try {
    const product = await Product.findByIdAndUpdate(id, update, { new: true });
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  findAllProducts,
  findProductById,
  createProduct,
  findAndDelete,
  findProductByName,
  updateProduct,
  findProductsByFilter,
};
