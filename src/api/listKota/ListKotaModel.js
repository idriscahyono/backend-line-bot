const mongoose = require('mongoose')

const listKotaSchema = new mongoose.Schema({
    city_id: String,
    province_id: String,
    province: String,
    type: String,
    city_name: String,
    postal_code: String
})

module.exports = mongoose.model('ListKota', listKotaSchema)