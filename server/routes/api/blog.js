const express = require('express');
const router = express.Router();

// Posts Model
const Post = require('../../models/posts');

// @ route Get api/items
// @ desc  Get All Items
// @ access Public
router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1})
        .then(posts => res.json(posts));
});


// @ route Post api/blog
// @ desc  Post All Items
// @ access Public
router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content
    })

    newPost.save().then(posts => res.json(posts))
});

// @ route Delete api/blog
// @ desc  Delete All Items
// @ access Public
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(posts => posts.remove().then(() => res.json({succes: true})))
        .catch(err => res.status(404).json({succes: false}))
})

module.exports = router;
