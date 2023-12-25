const express = require("express");

const route = express.Router();

const validateToken = require("../middleware/tokenHandler");

const {
  getCourse,
  postCourse,
  updateCourse,
  deleteCourse,
  getSpecificCourse,
} = require("../controller/courseControllers");

route.get("/", getCourse);

route.post("/", validateToken, postCourse);

route.get("/:id", getSpecificCourse);

route.put("/:id", validateToken, updateCourse);

route.delete("/:id", validateToken, deleteCourse);

module.exports = route;
