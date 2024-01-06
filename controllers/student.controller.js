const Student = require("../models/students.model.js");
// Controller function to get Student details by ID
exports.getStudent = async (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).json({ status: "Bad Request" });
  }
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json({ status: "OK", data: student });
  } catch (err) {
    res
      .status(500)
      .json({ status: "Internal Server Error", error: err.message });
  }
};

// Controller function to delete a Student by ID
exports.deleteStudent = async (req, res) => {
  if (req.params.id === undefined) {
    return res.status(400).json({ status: "Bad Request" });
  }

  if (!req.user)
    return res.status(404).json({ status: 404, message: "Student Not Found" });

  const student = await Student.findByIdAndDelete(req.params.id);
  res.status(200).json({ status: "Success" });
};

// Controller function to update Student by ID
exports.updateStudent = async (req, res) => {
  try {
    if (req.body) {
      const updatedStudent = {};
      if (req.body.name) updatedStudent.name = req.body.name;
      if (req.body.email) updatedStudent.email = req.body.email;
      if (req.body.phone) updatedStudent.phone = req.body.phone;
      if (req.body.address) updatedStudent.address = req.body.address;
      const student = await Student.findByIdAndUpdate(
        req.params.id,
        updatedStudent,
        { new: true, runValidators: true }
      );
      console.log(Student);
      res
        .status(200)
        .json({ status: "Name updated successfully", data: student });
    }
  } catch (err) {
    res
      .status(500)
      .json({ status: "Internal Server Error", error: err.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ status: "Bad Request" });
    }
    const student = await Student.create(req.body);
    res.status(201).json({ status: "OK", data: student });
  } catch (err) {
    res.status(400).json({ status: "Bad Request", error: err.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ status: "OK", data: students });
  } catch (err) {
    res
      .status(500)
      .json({ status: "Internal Server Error", error: err.message });
  }
};
