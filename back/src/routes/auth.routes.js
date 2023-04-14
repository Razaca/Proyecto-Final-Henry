require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const passport = require("passport");
const router = Router();

router.post(
  "/register",
  passport.authenticate("local-register", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { admin: req.user.admin, email: req.user.email },
      process.env.JWT_KEY
    );
    res.json(token);
  }
);

router.post(
  "/login",
  passport.authenticate("local-login", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { admin: req.user.admin, email: req.user.email },
      process.env.JWT_KEY
    );
    res.json(token);
  }
);

module.exports = router;
