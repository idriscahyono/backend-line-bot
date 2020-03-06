const mongoose = require("mongoose")

const produkSchema = new mongoose.Schema({
    nama: String,
    harga: String,
    stock: Number,
    image_url: String,
    public_id: String
})

module.exports = mongoose.model('Produk', produkSchema)