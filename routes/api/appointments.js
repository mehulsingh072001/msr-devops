const express = require('express');
const accountSid = process.env.TWILIO_ACCOUNT_SID 
require('dotenv').config();
const authToken = process.env.TWILIO_AUTH_TOKEN  
const router = express.Router();
const nodemailer = require('nodemailer');

// Database Models
const Appointment = require('../../models/appointment.js');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'mehulsingh072001@gmail.com',
        pass: 'boogytfahncqvbfn'
    }
});

router.post('/appointmentCreate', (req, res) => {

    newAppointment = Appointment({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        contact_method: req.body.contact_method,
        slots: {
            slot_time: req.body.slot_time,
            slot_date: req.body.slot_date,
            created_at: Date.now()
        }
    });
    newAppointment.save().then(appointment => res.json(appointment))

    var mailOptions = {
        from: 'mehulsingh072001@gmail.com',
        to: req.body.email,
        subject: 'Appointment Booked',
        text: "Your appointment has been booked for " +req.body.slot_date+ " at " +  req.body.slot_time
    }
    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log("Email sent: " + info.response)
        }
    })

    const message = 'This is twilio test'

    const client = require('twilio')(accountSid, authToken);
    client.messages
      .create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.phone
      })
      .then(message => console.log(message.sid))
})

module.exports = router
