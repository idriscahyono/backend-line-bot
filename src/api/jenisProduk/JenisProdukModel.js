const mongoose = require('mongoose');

const jenisProdukSchema = new mongoose.Schema({
	nama: String,
	image_url: String,
	public_id: String
});

module.exports = mongoose.model('JenisProduk', jenisProdukSchema);
