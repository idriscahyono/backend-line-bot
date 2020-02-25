const ProdukModel = require('./ProdukModel')

module.exports = {
    index: function (req, res) {
        ProdukModel.find().then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        ProdukModel.findById(req.params.id).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        ProdukModel.create(req.body).then(function (row) {
            res.send(row)
        })
    },

    update: function (req, res) {
        ProdukModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        ProdukModel.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    },

    upload: function (req, res) {
        ProdukModel.findByIdAndUpdate(req.params.id, {
            image_url: req.file.url
        }, {
            new: true
        }).then(function (row) {
            res.send(row)
        })
    }
}