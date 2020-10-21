const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    images: {type: Schema.Types.ObjectId, ref: "upload.files"},
    content: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now()
    },
    category: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('posts', PostSchema)
