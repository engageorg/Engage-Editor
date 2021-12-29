const express = require("express");
const router = express.Router();
const firebase = require("firebase/app");
const UserSession = require("../models/userSession");
const { v4: uuidv4 } = require('uuid');
require("firebase/auth");
const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours
router.post("/", (req, res) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(async (result) => {
      try {
        await UserSession.create({sessId:uuidv4(),expire:MAX_AGE, user:result.user.uid}).then((response) => {
          console.log(response)
          res.json({ message: "Login Successful", sessId:response.sessId});
        });
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      req.session.error = "Invalid Credentials";
      console.log(error);
    });
});

module.exports = router;
