let mongoose = require('mongoose')

mongoose.connect('mongodb+srv://test:test@bridgearound-ebloa.mongodb.net/alien', { useNewUrlParser: true })

mongoose.set('useCreateIndex', true)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)