// Load environment variables from .env file
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

// Importing required modules and setting up initial configurations
const app = require("./app.js");
const startApp = require("./config/firebase/app.js");
const startServer = require("./config/firebase/server.js");
const DBConnection = require("./config/database.js"); // Database connection setup

// Configuring the port to listen on, defaulting to 3000 if not specified in the environment
const port = process.env.PORT || 3000;

// Extracting MongoDB connection URL from environment variables
const DB = process.env.MONGODB_URL;

// Establishing a connection to the MongoDB database
DBConnection(DB);

// Initializing the Firebase client
startApp();

// Starting the Firebase server
startServer();

// Starting the Express server to listen on the specified port
app.listen(port, () => {
  console.log(`listening on ${port} 🚀`);
});
