const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Import Routes
const blogRoute = require('./routes/api/blog')
const authRoute = require('./routes/api/auth')
const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use('/public', express.static('public'));

// DB config
const db = require('./config/keys').mongoURI;

mongoose.connect(db)
  .then(() => console.log('Db connected....'))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/blog', blogRoute)
app.use('/api/user', authRoute)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`))
