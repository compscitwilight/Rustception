let express = require("express")
let app = express()

app.get("/rust", (req, res) => {
    res.send("rust")
})

app.listen(3000)