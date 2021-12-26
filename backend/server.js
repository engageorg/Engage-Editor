const app = require('express')()

app.get("/", (req,res) => {
    res.send("GFJDJKFHKSDH")
})

app.listen(5000, () => {
    console.log("Server running on 5000")
})