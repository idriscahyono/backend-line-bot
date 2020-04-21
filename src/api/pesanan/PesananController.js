const PesananModel = require('./PesananModel')

module.exports = {
    index: function (req, res) {
        PesananModel.find().then(function (row) {
            res.send(row)
        })
    },

    showAdmin: function (req, res) {
        PesananModel.find({
            nomorBayar: req.params.id,
            userBayar: true,
            adminBayar: false
        }).then(function (row) {
            res.send(row)
        })
    },

    showByNomorBayar: function (req, res) {
        PesananModel.find({
            nomorBayar: req.params.id,
        }).then(function (row) {
            res.send(row)
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
        PesananModel.findOneAndUpdate({
                nomorBayar: req.params.id
            },
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },
    updateByUserId: function (req, res) {
        PesananModel.updateMany({
                userId: req.params.id
            },
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