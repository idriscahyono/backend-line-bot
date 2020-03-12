const jwt = require('jsonwebtoken')
const UserModel = require('./UserModel')

module.exports = {
    index: function (req, res) {
        UserModel.find().then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        UserModel.findById(req.params.id).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        UserModel.create(req.body).then(function (row) {
            res.send(row)
        })
    },

    update: function (req, res) {
        UserModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        UserModel.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    },

    login: function (req, res) {
        const {
            username,
            password
        } = req.body
        const coba = UserModel.findOne({
            username,
            password
        }).then(function (row) {
            if (row) {
                jwt.sign({
                    _id: row._id,
                    username: row.username
                }, 'apahayo', function (err, token) {
                    res.send({
                        success: true,
                        token
                    })
                })
            } else res.send({
                success: false
            })
        })
    }
}