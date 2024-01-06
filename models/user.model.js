const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A User must have a name"],
    trim: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: [true, "A User must have an email"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "A User must have a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please enter the confirmation password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  CreatedAt: { type: Date, default: new Date() },
  isVerified: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
});

// Method to compare entered password with the stored hashed password
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Middleware to hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  // Only run this function if the password was actually modified
  if (!this.isModified("password")) return next();
  // Hash the password with a cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // Delete the passwordConfirm field to avoid storing it in the database
  this.passwordConfirm = undefined;
  next();
});

// Create the User model based on the user schema
const User = mongoose.model("User", userSchema);

module.exports = User;
