const { Router } = require("express");
const router = Router();
const {
  getProducts,
  postProduct,
  getProductById,
  deleteProduct,
  putProduct,
} = require("../handlers/product.handler");

/* trabaja con todos los productos */
router.get("/", getProducts);

/* trabaja con un unico producto */
router.get("/:id", getProductById);

/* agrega un producto a la base de datos */
router.post("/", postProduct);

router.put("/:id", putProduct);

/* elimnina un producto por id */
router.delete("/:id", deleteProduct);

module.exports = router;
