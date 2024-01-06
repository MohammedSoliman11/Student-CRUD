const express = require("express");
const {
  getStudent,
  deleteStudent,
  updateStudent,
  createStudent,
  getAllStudents,
} = require("../controllers/student.controller.js"); // Importing student-related controllers
const protect = require("../middlewares/auth.middleware.js"); // Importing authentication middleware

const studentRouter = express.Router();
studentRouter.use(protect);
studentRouter.route("/").get(getAllStudents); // get all students
studentRouter.route("/createStudent").post(createStudent); // create a new student
studentRouter
  .route("/:id")
  .get(getStudent)
  .delete(deleteStudent)
  .put(updateStudent); // CRUD operations for Student

// Exporting the user router for use in the main application
module.exports = studentRouter;
