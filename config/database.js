const mongoose = require("mongoose");
const DBConnection = (DB) => {
  mongoose
    .connect(DB)
    .then(() => console.log("DB Connection is established 🚀"));
};

module.exports = DBConnection;
