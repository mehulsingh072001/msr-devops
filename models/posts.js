const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
    image: {
        type: String
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
    },
    category: {
        type: String,
    },
});

module.exports = mongoose.model('posts', PostSchema)
