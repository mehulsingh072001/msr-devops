const express = require('express');
const mongoose = require('mongoose');
const multer = require("multer")
const bodyParser = require('body-parser');
const cors = require("cors")

//Import Routes
const blogRoute = require('./routes/api/blog')
const authRoute = require('./routes/api/auth')

const app = express();
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)){
        const error = new Error("Incorrect File");
        error.code = "INCORRECT_FILETYPE"
    }
    cb(null, true);
}

const upload = multer({
    dest: './uploads',
    fileFilter,
    limits: {
        fileSize: 5000000
    }
});

//Bodyparser middleware
app.use(bodyParser.json());


// DB config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('Db connected....'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/blog', blogRoute)
app.use('/api/user', authRoute)
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({file: req.file});
})
app.use((err, req, res, next) => {
    if (err.code = "INCORRECT_FILETYPE"){
        res.status(422).json({ error: "Only Images are Allowed"});
        return;
    }
    if(err.code = "LIMIT_FILE_SIZE"){
        res.status(422).json({ error: 'Allow file size is 500kb'})
    }
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`))

