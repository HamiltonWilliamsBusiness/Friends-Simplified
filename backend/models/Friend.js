const mongoose = require('mongoose')

const Schema = mongoose.Schema

const friendSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    birthday: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Friend', friendSchema)