const router = require('express').Router();
const User = require("../../models/User");
const { registerValidation, loginValidation } = require('../../validation');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

//Register
router.post('/register', async(req, res) => {

    // Validate the data of user
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Checking if user already exists
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email already exists')

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err) {
        res.status(400).send(err);
    }
});

//Login
router.post('/login', async (req, res) => {
    // Validate data before login
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Checking if email exist
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email already exists')

    const emailNoExist = await User.findOne({email: null});
    if (emailNoExist) return res.status(400).send('Email No exists')

    // Password is correct?
    const validPass = await bcrypt.compare(req.body.password, user.password);
    res.header('auth-token', token).send(token);



})
router.post('/login')
module.exports = router
