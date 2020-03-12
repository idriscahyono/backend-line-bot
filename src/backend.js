const express = require("express")
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken')
const app = express()
const cors = require("cors")
const router = require("./config/router")
require("./config/db")

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("404 not found")
})

app.use(router)

const port = process.env.port || 3000
app.listen(port, function () {
    console.log("Server Running")
})