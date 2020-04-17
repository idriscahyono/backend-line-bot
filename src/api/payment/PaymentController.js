const cloudinary = require('cloudinary')
const PaymentModel = require('./PaymentModel')

module.exports = {
    index: function (req, res) {
        PaymentModel.find().then(function (rows) {
            res.send(rows)
        })
    },

    show: function (req, res) {
        PaymentModel.findById(req.params.id).then(function (row) {
            res.send(row)
        })
    },

    store: function (req, res) {
        PaymentModel.create(req.body).then(function (row) {
            res.send(row)
        })
    },

    update: function (req, res) {
        PaymentModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }).then(function (row) {
            res.send(row)
        })
    },

    destroy: function (req, res) {
        PaymentModel.findByIdAndDelete({
            _id: req.params.id
        }).then(function (row) {
            cloudinary.v2.uploader.destroy(row.public_id, function (eror, result) {
                console.log(result, eror)
            });
            res.send(row)
        })
    },

    upload: function (req, res) {
        PaymentModel.find.findOneAndUpdate(req.params.id, {
            image_url: req.file.secure_url,
            public_id: req.file.public_id
        }, {
            new: true
        }).then(function (row) {
            res.send(row)
        })
    }
}