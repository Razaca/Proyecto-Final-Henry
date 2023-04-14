const { Router } = require("express");
const router = Router();

// Configurar los routers
router.use("/product", require("./product.routes"));
router.use("/user", require("./user.routes"));
router.use("/auth", require("./auth.routes"));

module.exports = router;
