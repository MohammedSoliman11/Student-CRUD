// Importing necessary modules and controllers
const express = require("express");
const { getMe } = require("../controllers/user.controller.js"); // Importing user-related controllers

const { register, login } = require("../controllers/auth.controller.js"); // Importing authentication controllers
const protect = require("../middlewares/auth.middleware.js"); // Importing authentication middleware

// Creating an Express Router instance
const userRouter = express.Router();

// Routes for user registration and login
userRouter.post("/register", register);
userRouter.post("/login", login);

// Middleware for authentication - Protects routes below this point
userRouter.use(protect);
// Protected routes for user-related operations
userRouter.get("/me", getMe); // Route to get information about the authenticated user

// Exporting the user router for use in the main application
module.exports = userRouter;
