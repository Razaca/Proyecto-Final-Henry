const { Router } = require("express");
const router = Router();
const {
  getColors,
  postColor,
  deleteColor,
} = require("../handlers/color.handler.js");

router.get("/", getColors);
router.post("/", postColor);
router.delete("/:id", deleteColor);

module.exports = router;
