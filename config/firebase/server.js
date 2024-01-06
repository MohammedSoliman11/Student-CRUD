const admin = require("firebase-admin");
const serviceAccount = require("../../service-account.json");

const startServer = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
};

module.exports = startServer;
