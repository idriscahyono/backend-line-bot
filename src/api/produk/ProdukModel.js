const mongoose = require("mongoose")

const produkSchema = new mongoose.Schema({
    nama: String,
    harga: String,
    image_url: String
})

module.exports = mongoose.model('Produk', produkSchema)