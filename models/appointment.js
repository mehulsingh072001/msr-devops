const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

const appointmentSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    phone: Number,
    message: String,
    contact_method: String,
    slots: {
        slot_time: String,
        slot_date: String,
        created_at: Date,
    },
    created_at: Date
})
module.exports = mongoose.model('appointment', appointmentSchema)
