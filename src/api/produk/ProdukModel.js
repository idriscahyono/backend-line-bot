const mongoose = require('mongoose');

const produkSchema = new mongoose.Schema({
	nama: String,
	jenis: String,
	harga: Number,
	stock: Number,
	berat: Number,
	image_url: String,
	public_id: String
});

module.exports = mongoose.model('Produk', produkSchema);
