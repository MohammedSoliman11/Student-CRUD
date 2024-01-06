const User = require("../models/user.model.js");
const admin = require("firebase-admin");

// Controller function for user registration
exports.register = async (req, res) => {
  try {
    // Check if passwords match
    if (req.body.password !== req.body.passwordConfirm) {
      return res
        .status(400)
        .json({ status: "Bad Request", message: "Passwords don't match" });
    }

    // Create a new user based on request data
    const userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    };
    const user = await User.create(userData);
    user.password = undefined;
    // Generate a custom token for the registered user
    const customToken = await admin
      .auth()
      .createCustomToken(user._id.toString());

    // Respond with success status, user data, and the custom token
    res.status(201).json({ status: "OK", data: user, token: customToken });
  } catch (err) {
    // Handle registration failure and respond with error status
    res.status(400).json({ status: "fail", message: err.message });
  }
};

// Controller function for user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password)
      return res.status(400).json({ status: "Bad Request" });

    // Find the user by email and retrieve the hashed password
    const user = await User.findOne({ email }).select("+password");

    // Check if user exists and the provided password is correct
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
    user.password = undefined;
    // Generate a custom token for the authenticated user
    const userId = user._id.toString();
    const customToken = await admin.auth().createCustomToken(userId);

    // Respond with the custom token
    res.status(201).json({ user, token: customToken });
  } catch (error) {
    // Handle login failure and respond with error status
    console.error(error);
    res.status(401).json({ message: "Authentication failed" });
  }
};
