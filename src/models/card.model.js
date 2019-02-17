let mongoose = require('mongoose')

mongoose.connect('mongodb+srv://test:test@bridgearound-ebloa.mongodb.net/alien', { useNewUrlParser: true })

mongoose.set('useCreateIndex', true)

let CardSchema = new mongoose.Schema({
    player: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Card', CardSchema)