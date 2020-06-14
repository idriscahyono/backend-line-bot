const cloudinary = require('cloudinary');
const JenisProduk = require('./JenisProdukModel');

module.exports = {
	index: function(req, res) {
		JenisProduk.find().then(function(rows) {
			res.send(rows);
		});
	},

	show: function(req, res) {
		JenisProduk.findById(req.params.id).then(function(row) {
			res.send(row);
		});
	},

	store: function(req, res) {
		JenisProduk.create(req.body).then(function(row) {
			res.send(row);
		});
	},

	update: function(req, res) {
		JenisProduk.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		}).then(function(row) {
			cloudinary.v2.uploader.destroy(row.public_id, function(eror, result) {
				console.log(result, eror);
			});
			res.send(row);
		});
	},

	destroy: function(req, res) {
		JenisProduk.findByIdAndDelete({
			_id: req.params.id
		}).then(function(row) {
			cloudinary.v2.uploader.destroy(row.public_id, function(eror, result) {
				console.log(result, eror);
			});
			res.send(row);
		});
	},

	upload: function(req, res) {
		JenisProduk.findByIdAndUpdate(
			req.params.id,
			{
				image_url: req.file.secure_url,
				public_id: req.file.public_id
			},
			{
				new: true
			}
		).then(function(row) {
			res.send(row);
		});
	}
};
