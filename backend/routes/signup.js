const express = require("express")
const router = express.Router()
const firebase = require("firebase/app");
require("firebase/auth");
router.post("/", (req, res) => {
    firebase.auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((result) => {
      console.log(result)
    })
})

module.exports = router