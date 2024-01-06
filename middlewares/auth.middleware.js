const { getAuth, signInWithCustomToken } = require("firebase/auth");
const AppError = require("../utils/appError.js");
const User = require("../models/user.model.js");

// Authentication middleware to verify the user's identity using Firebase custom tokens
const protect = async (req, res, next) => {
  // Extracting the token from the request headers
  const headerToken = req.headers.authorization;

  // Check if a token is provided
  if (!headerToken) {
    return next(new AppError("No token provided", 401));
  }

  // Check if the token format is valid
  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    return next(new AppError("Invalid token", 401));
  }

  // Extracting the actual token from the header
  const token = headerToken.split(" ")[1];

  // Initializing Firebase authentication
  const auth = getAuth();

  // Verifying the token with Firebase authentication
  const userId = await signInWithCustomToken(auth, token)
    .then((userCredential) => {
      return userCredential.user.uid;
    })
    .catch((err) => {
      next(new AppError("Unauthorized", 401));
    });

  // Fetching the user based on the verified user ID
  const user = await User.findById(userId).select("-password");

  // Storing the user information in the request object for further use
  req.user = user;

  // Passing control to the next middleware or route handler
  next();
};

module.exports = protect;
