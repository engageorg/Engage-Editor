const express = require("express");
const router = express.Router();
const UserCode = require("../models/userCode");
const UserSession = require("../models/userSession");
require("firebase/auth");

router.get("/:id", async (req, res) => {
  console.log(req.params);
  UserSession.find({ sessId: req.params.id }).then((response) => {
    if (response.length === 1) {
      UserCode.find({ creator: response[0].user }).then((response) => {
        res.json({ status: 200, code: response });
      });
    } else {
      console.log("NO SUCH USER");
    }
  });
});

router.get("/code/:id", async (req, res) => {
  console.log(req.params);
  UserCode.find({ _id: req.params.id }, "code").then((response) => {
    console.log(response[0].code);
    res.json({ status: 200, code: response[0].code });
  });
});

module.exports = router;
