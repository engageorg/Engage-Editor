const express = require("express")
const router = express.Router()
const UserCode = require('../models/userCode')

const firebase = require("firebase/app");
require("firebase/auth");

router.get("/:id", async(req, res) => {
    console.log(req.params)
    UserCode.find({creator:req.params.id}).then(response => {
        console.log(response)
        res.json({status:200, code:response})
    })
})

router.get("/code/:id", async(req, res) => {
    console.log(req.params)
    UserCode.find({_id:req.params.id}, 'code').then(response => {
        console.log(response[0].code)
        res.json({status:200, code:response[0].code})
    })
})

module.exports = router