require("dotenv").config();
const passport = require("passport");
const User = require("../models/User");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcryptjs");
const { createUser } = require("../controllers/user.controller");

passport.use(
  "local-register",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const { address, fullname, username } = req.body;
      try {
        const userExists = await User.find({ email: email });

        if (userExists.length)
          return done(null, false, { message: "Email ya registrado" });

        const newUser = await createUser({
          email,
          password,
          address,
          fullname,
          username,
        });

        return done(null, newUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const userExists = await User.findOne({ email: email });

        const compare = await userExists.matchPassword(password);

        if (!compare) {
          return done(null, false, { message: "Contraseña incorrecta" });
        }

        return done(null, userExists);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID_GOOGLE,
      clientSecret: process.env.CLIENT_SECRET_KEY_GOOGLE,
      callbackURL: `${process.env.BACK_URL}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, emails } = profile;
      const email = emails[0].value;

      // Aquí puede guardar la información del usuario en su base de datos
      const userExists = await User.find({ email: email });

      if (userExists) {
        return done(null, userExists);
      }

      const newUser = await User.create({
        password: id,
        username: displayName,
        email: email,
      });

      return done(null, newUser);
    }
  )
);

// Serializar el usuario para almacenarlo en una sesión
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserializar el usuario para obtener su información de la sesión
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
