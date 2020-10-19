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
app.use(methodOverride('_method'));

// DB config
const db = require('./config/keys').mongoURI;


//Connect to Mongo
const conn = mongoose.createConnection(db)

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads')
})

const storage = new GridFsStorage({
  url: 'mongodb://localhost:27017/msr-devops',
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
// storage engine

//Use Routes
app.use('/api/blog', blogRoute)
app.use('/api/user', authRoute)

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({file: req.file});
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`))

