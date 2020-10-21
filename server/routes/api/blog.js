const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const crypto = require('crypto')
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream')
const methodOverride = require('method-override');
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

const mongoURL = "mongodb://localhost:27017/msr-devops"
const conn = mongoose.createConnection(mongoURL)
// init gfs
let gfs;
conn.once('open', () => {
  // init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads')
})

const storage = new GridFsStorage({
  url: mongoURL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });
router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file })
  //res.redirect('/');
})
// @router Get /fles
// @desc display all files in json
router.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
  // Check if files
  if(!files || files.length.length === 0) {
  return res.status(404).json({
    err: 'No files exist'
  });
  }
  // Files exist 
  return res.json(files)
  });

});
// @router Get /fles
// @desc display all files in json
router.get('/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
  // Check if files
  if(!file || file.length === 0) {
  return res.status(404).json({
    err: 'No files exist'
  });
  }

  // Files exist 
  return res.json(file)
  });
})

// @router Get /fles
// @desc display all files in json
router.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
  // Check if files
  if(!file || file.length === 0) {
  return res.status(404).json({
    err: 'No files exist'
  });
  }

  // check if image
  if(file.contentType === 'image/jpeg' || file.contentType === 'img/png') {
    // Read output to browser
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  }else {
    res.status(404).json({
    err: 'not an image'
  })
  }

  // Files exist 
  return res.json(file)
  });
})

// @ route Post api/blog
// @ desc  Post All Items
// @ access Public
router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
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
