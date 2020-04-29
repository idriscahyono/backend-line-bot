const mongoose = require('mongoose')

const pesananSchema = new mongoose.Schema({
    userId: String,
    nama: String,
    harga: Number,
    berat: Number,
    alamatKirim: String,
    ongkir: Number,
    userBayar: Boolean,
    adminBayar: Boolean,
    nomorBayar: String
})

module.exports = mongoose.model('Pesanan', pesananSchema)