const express = require("express")
const router = express.Router()
const firebase = require("firebase/app");
require("firebase/auth");
router.post("/", (req, res) => {
    firebase.auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((result) => {
      res.json({message:"Email Added", status:200, id:result.user.uid})
    }).catch(error => {
      console.log(error)
      res.json({error:error, status:403})
    })
})

module.exports = router