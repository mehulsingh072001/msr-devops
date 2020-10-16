const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blog = require('./routes/api/blog')

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('Db connected....'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/blog', blog)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`))

