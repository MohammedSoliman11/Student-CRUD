const { initializeApp } = require("firebase/app");
const startApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDXIJWgJ64miPrWMz_d-USUq7DV7VvBzok",
    authDomain: "auth-server-3fd06.firebaseapp.com",
    projectId: "auth-server-3fd06",
    storageBucket: "auth-server-3fd06.appspot.com",
    messagingSenderId: "682303723662",
    appId: "1:682303723662:web:2a0127edccab5811e811df",
    measurementId: "G-XF7T4WC2YX",
  };

  // Initialize Firebase
  const init = initializeApp(firebaseConfig);
};

module.exports = startApp;
