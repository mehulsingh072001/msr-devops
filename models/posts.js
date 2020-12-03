const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
    _id: new mongoose.Types.ObjectId()
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    category: {
        type: String,
    },
});

module.exports = mongoose.model('posts', PostSchema)
