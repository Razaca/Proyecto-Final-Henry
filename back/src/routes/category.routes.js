const { Router } = require("express");
const router = Router();
const {
  getCategories,
  postCategory,
  deleteCategory,
} = require("../handlers/category.handler.js");

router.get("/", getCategories);
router.post("/", postCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
