const app = require("express")();
const express = require("express");
const login = require("./routes/login");
const signup = require("./routes/signup");
const mongoose = require("mongoose");
const problemStatement = require("./routes/problemstatement");
const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/storage");
require('dotenv').config();

const firebaseConfig = {
  apiKey: "AIzaSyAp2cQvNNp8fUKOv6kO_7wR5IsKROCoh14",
  authDomain: "engage-6ef42.firebaseapp.com",
  projectId: "engage-6ef42",
  storageBucket: "engage-6ef42.appspot.com",
  messagingSenderId: "27842359842",
  appId: "1:27842359842:web:e8f5b15f6a86ac66fa507b",
  measurementId: "G-EVEY2DP36T",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/signup", signup);
app.use("/login", login);
app.use("/ps", problemStatement);

app.listen(5000, () => {
  console.log("Server running on 5000");
});
