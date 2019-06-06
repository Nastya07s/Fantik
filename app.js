const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');
const keys = require('./config/keys');
const morgan = require('morgan');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useNewUrlParser: true}).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);

const genreRouter = require('./routes/genre');
const articleRouter = require('./routes/article');
const authRoutes = require('./routes/auth');

app.use(morgan());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.use('/api/genres', genreRouter);
app.use('/api/auth', authRoutes);
app.use('/api', articleRouter);


module.exports = app;
