const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0-nappn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log('connected')
}).catch(function (e) {
    console.log(e)
})