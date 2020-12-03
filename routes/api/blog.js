const express = require('express');
const router = express.Router();
const multer = require('multer');
var fs = require('fs');
const path = require('path')
const verify = require('../../models/verifyToken')

// Posts Model
const Post = require('../../models/posts');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+file.originalname)
  }
});
var upload = multer({ storage: storage}).single('file');

// @ route Get api/items
// @ desc  Get All Items
// @ access Public
router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1})
        .then(posts => res.json(posts));
});

router.get('/post/:id', (req, res, id) => {
    Post.findById(id)
        .then(posts => res.json(posts));
        .catch(console.log('Error'))
}) 

router.get('/everything', (req, res) => {
    Post.find()
        .sort({ date: -1})
        .then(posts => res.json(posts));
});

router.get('/web-dev', (req, res) => {
    Post.find({
        category: ['web-dev']
    })
        .sort({ date: -1})
        .then(posts => res.json(posts));
})
router.get('/linux', (req, res) => {
    Post.find({
        category: ['linux']
    })
        .sort({ date: -1})
        .then(posts => res.json(posts));
})
router.get('/pc', (req, res) => {
    Post.find({
        category: ['PC']
    })
        .sort({ date: -1})
        .then(posts => res.json(posts));
})

// @ route Post api/blog
// @ desc  Post All Items
// @ access Public
router.post('/', verify, upload, (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        category: req.body.category,
        image: req.file.path
    })

    newPost.save().then(posts => res.json(posts))
});

// @ route Delete api/blog
// @ desc  Delete All Items
// @ access Public
router.get('/:image', (req, res) => {
    Post.findById(req.params.image)
        .then(posts => res.render({succes: true}))
        .catch(err => res.status(404).json({succes: false}))
})

module.exports = router;
