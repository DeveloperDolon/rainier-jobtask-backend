const express = require("express");

const routes = express.Router();

const validateToken = require("../middleware/tokenHandler");

const {
  userRegister,
  userLogin,
  userProfile,
  getSingleUser
} = require("../controller/userController");

routes.post("/register", userRegister);

routes.post("/login", userLogin);

routes.get("/current", validateToken, userProfile);

routes.get("/:id", getSingleUser);

module.exports = routes;
