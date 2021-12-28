const express = require("express")
const router = express.Router()
const UserCode = require('../models/userCode')

const firebase = require("firebase/app");
require("firebase/auth");

router.get("/:id", async(req, res) => {
    console.log(req.params)
    UserCode.find({creator:req.params.id}, 'name createdAt language').then(response => {
        console.log(response)
        res.json({status:200, code:response})
    })
})

module.exports = router