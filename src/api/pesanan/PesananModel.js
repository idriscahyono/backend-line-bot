const mongoose = require('mongoose')

const pesananSchema = mongoose.Schema({
    userId: String,
    nama: String,
    harga: Number,
    userBayar: Boolean,
    adminBayar: Boolean,
    nomorBayar: String
})

module.exports = mongoose.model('Pesanan', pesananSchema)