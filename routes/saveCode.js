const express = require("express")
const router = express.Router()
const UserCode = require('../models/userCode')

router.post("/", async (req, res) => {
    try{
        await UserCode.create(req.body).then(response => {
            res.json({status : 200});
        })
    }
    catch(error){
        console.log(error);
    }
})

module.exports = router