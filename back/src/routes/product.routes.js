const { Router } = require("express");
const router = Router();
const {
  getProducts,
  postProduct,
  getProductById,
  deleteProduct,
  putProduct,
  getFilterProduct
} = require("../handlers/product.handler");

/* trae todos los productos */
router.get("/", getProducts);

/* trae un unico producto */
router.get("/id/:id", getProductById);

/* trae productos dependiendo los filtro q se le den por query */
router.get("/filter", getFilterProduct);

/* agrega un producto a la base de datos */
router.post("/", postProduct);

/* modificar un producto */
router.put("/:id", putProduct);

/* elimnina un producto por id */
router.delete("/:id", deleteProduct);

module.exports = router;
