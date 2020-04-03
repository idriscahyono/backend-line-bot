const UserLineModel = require('./UserLineModel')

module.exports = {
    index: function (req, res) {
        UserLineModel.find().then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        UserLineModel.find({
            userId: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        UserLineModel.create(req.body).then(function (row) {
            res.send(row)
        })
    },

    update: function (req, res) {
        UserLineModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        UserLineModel.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    },
}