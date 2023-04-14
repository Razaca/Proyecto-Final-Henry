const { Router } = require("express");
const {
  getUsers,
  getUserById,
  postUser,
  deleteUser,
} = require("../handlers/user.handler");
const router = Router();

/* trabaja con todos los usuarios */
router.get("/", getUsers);

/* router.get("/:id", getUserById); */

router.post("/", postUser);

/* router.put("/", putUser); */

router.delete("/:id", deleteUser);

module.exports = router;
