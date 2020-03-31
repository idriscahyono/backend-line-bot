const mongoose = require('mongoose')

const userLineSchema = new mongoose.Schema({
    userId: String,
    username: String,
    state: String,
    isAdmin: Boolean
})
module.exports = mongoose.model('UserLine', userLineSchema)