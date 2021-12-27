const express = require("express")
const router = express.Router()
const firebase = require("firebase/app");
require("firebase/auth");

router.post("/", (req, res) => {
   if(req.session.authenticated) {
     req.json(req.session);   
   }
   else{
    firebase
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
   }
   
})

module.exports = router