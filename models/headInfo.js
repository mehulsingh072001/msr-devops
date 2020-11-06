const mongoose = require('mongoose');

//Create Schema
const MailSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 6,
        required: true,
        max: 255
    },
    email: {
        required: true,
        type: String,
        min: 6,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('mail', MailSchema)
