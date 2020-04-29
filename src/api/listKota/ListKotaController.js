const ListKotaModel = require('./ListKotaModel')

module.exports = {
    index: function (req, res) {
        ListKotaModel.find().then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        ListKotaModel.findOne({
            city_name: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        ListKotaModel.create(req.body).then(function (row) {
            res.send(row)
        })
    },

    update: function (req, res) {
        ListKotaModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        ListKotaModel.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            res.send(row)
        })
    }
}