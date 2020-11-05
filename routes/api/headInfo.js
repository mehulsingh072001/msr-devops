const express = require('express');
const router = express.Router();

const Mail = require('../../models/headInfo')
router.get('/info', (req, res) => {
    HeadMail.find()
        .sort({ date: -1})
        .then(headMails => res.json(headMails));
});
router.post('/',(req, res) => {
    const info = new Mail({
        name: req.body.name,
        email: req.body.email
    });
    info.save().then(mail => res.json(mail)) 
})

module.exports = router;
