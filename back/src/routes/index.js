const { Router } = require("express");
const router = Router();

// Configurar los routers
router.use("/product", require("./product.routes"));
router.use("/user", require("./user.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/category", require("./category.routes"));

module.exports = router;
