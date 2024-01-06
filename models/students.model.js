const mongoose = require("mongoose");

// Define the Student schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Student must have a name"],
    trim: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: [true, "A Student must have an email"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  grade: String,
  address: String,
  phoneNumber: String,
  CreatedAt: { type: Date, default: new Date() },
});

// Create the Student model based on the Student schema
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
