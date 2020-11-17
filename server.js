const express = require('express');
var text = require('textbelt')
const schedule = require('node-schedule')
const mongoose = require('mongoose');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');

//Import Routes
const blogRoute = require('./routes/api/blog')
const authRoute = require('./routes/api/auth')
const appointmentCreateRoute = require('./routes/api/appointments')
const headInfoRoute = require('./routes/api/headInfo')

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.json())
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));

// DB config
const db = require('./config/keys').mongoURI;

mongoose.connect(db)
  .then(() => console.log('Db connected....'))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/blog', blogRoute)
app.use('/api/user', authRoute)
app.use('/api/info', headInfoRoute)
app.use('/api/', appointmentCreateRoute)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`))

