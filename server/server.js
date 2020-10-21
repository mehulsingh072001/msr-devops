const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const crypto = require('crypto')
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream')
const methodOverride = require('method-override');
const cors = require('cors');

//Import Routes
const blogRoute = require('./routes/api/blog')
const authRoute = require('./routes/api/auth')
const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({
  extended: false
}));

//Bodyparser middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'))

// DB config
const db = require('./config/keys').mongoURI;

mongoose.connect(db)
  .then(() => console.log('Db connected....'))
  .catch(err => console.log(err));

const conn = mongoose.createConnection(db)
// init gfs
let gfs;
conn.once('open', () => {
  // init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads')
})

//Use Routes
app.use('/api/blog', blogRoute)
app.use('/api/user', authRoute)
const storage = new GridFsStorage({
  url: db,
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
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file })
  //res.redirect('/');
})
// @router Get /fles
// @desc display all files in json
app.get('/files', (req, res) => {
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
app.get('/files/:filename', (req, res) => {
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
app.get('/image/:filename', (req, res) => {
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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`))
