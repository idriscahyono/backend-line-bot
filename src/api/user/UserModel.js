const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('User', userShema)