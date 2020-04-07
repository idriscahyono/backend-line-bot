const PesananModel = require('./PesananModel')

module.exports = {
    index: function (req, res) {
        PesananModel.find().then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        PesananModel.find({
            userId: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        PesananModel.create(req.body).then(function (row) {
            res.send(row)
        })
    },

    update: function (req, res) {
        PesananModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        PesananModel.deleteMany({
            userId: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    },
}