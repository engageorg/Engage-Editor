const { response } = require("express");
const express = require("express");
const router = express.Router();
const UserSession = require("../models/userSession");
const UserCode = require("../models/userCode")

router.post("/", async (req, res) => {
  UserSession.find({ sessId: req.body.sessionId }).then((response) => {
    if (response.length === 1) {
    console.log(response)
    const code =req.body.code
    const name =req.body.name
    const creator = response[0].user
    try{
        UserCode.create({code,name,creator}).then((response) => {
            res.json({ status: 200 });
          });
    }catch(error){
        console.log(error);
    }
    }else{
        console.log("NO SUCH USER")
    }
  });
});

module.exports = router;
