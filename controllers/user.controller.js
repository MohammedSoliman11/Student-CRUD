// Controller function to get information about the authenticated user
exports.getMe = async (req, res) => {
  if (!req.user) {
    return res.status(404).json({ status: "User Not Found" });
  }
  const user = req.user;
  res.status(200).json({ status: "OK", data: user });
};
