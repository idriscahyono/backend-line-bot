const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    messageId: String,
    image_url: String,
    public_id: String
})

module.exports = mongoose.model('Payment', paymentSchema)