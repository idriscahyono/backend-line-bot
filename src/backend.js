const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./config/router")
const verifyToken = require("./lib/verifyToken")
require("./config/db")

app.use(express.json())
app.use(cors())

app.get("/", function (req, res) {
    res.send("404 not found")
})

app.get("/cek", verifyToken, function (req, res) {
    res.sendStatus(200)
})

app.use(router)

const port = process.env.port || 3000
app.listen(port, function () {
    console.log("Server Running")
})