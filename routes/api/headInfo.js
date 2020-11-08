const express = require('express');
const router = express.Router();

const Mail = require('../../models/headInfo')
router.post('/',(req, res) => {
    const info = new Mail({
        name: req.body.name,
        email: req.body.email
    });
    info.save().then(mail => res.json(mail)) 
})

module.exports = router;
