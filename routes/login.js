const express = require("express");
const router = express.Router();
const firebase = require("firebase/app");
const UserSession = require("../models/userSession");
const UserInfo = require("../models/userInfo")
const { v4: uuidv4 } = require('uuid');
const { response } = require("express");
require("firebase/auth");
const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours
router.post("/", (req, res) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((result) => {
        UserInfo.findOne({email:req.body.email}).then((userinfo) => {
          console.log(userinfo)
          UserSession.create({sessId:uuidv4(),expire:MAX_AGE, user:result.user.uid}).then((response) => {
            res.json({ message: "Login Successful", name:userinfo.name,sessId:response.sessId});
          })
        })
    })
    .catch((error) => {
      req.session.error = "Invalid Credentials";
      console.log(error);
    });
});

module.exports = router;
