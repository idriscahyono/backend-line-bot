const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const cors = require("cors")
const router = require("./config/router")
const verifyToken = require("./config/verifyToken")
require("./config/db")

app.use(express.json())
app.use(cors())

app.get("/login", function (req, res) {
    const {
        username,
        password
    } = req.body
    if (username == "admin" && password == "admin") {
        jwt.sign({
            username: "admin"
        }, "randomStuff", function (err, token) {
            res.send({
                success: true,
                token
            })
        })
    } else {
        res.send({
            success: false
        })
    }
})

app.get("/", verifyToken, function (req, res) {
    res.json(req.user)
    res.send("404 not found")
})

app.use(router)

const port = process.env.port || 3000
app.listen(port, function () {
    console.log("Server Running")
})