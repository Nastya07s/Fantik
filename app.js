const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
const keys = require('./config/keys');
const morgan = require('morgan');
const app = express();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const user = require('./models/user');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useNewUrlParser: true}).then(
    () => {
        console.log('Database is connected')
    },
    err => {
        console.log('Can not connect to the database' + err)
    }
);

app.use(passport.initialize())
require('./middleware/passport')(passport)

module.exports.transporter = nodemailer.createTransport({
    service: 'GMail',
    auth: {
        user: 'typist0797@gmail.com',
        pass: '12345678a9',
    },
});

app.get('/confirmation/:token', async (req, res) => {
    try {
        const user1 = jwt.verify(req.params.token, keys.jwt);
        await user.findOneAndUpdate({username: user1.username}, {confirmed: true});
        return res.redirect('http://localhost:4200/confirmation/`${req.params.token}`');
    } catch
        (e) {
        console.log(e);
        res.send(e);
    }

});

const userRouter = require('./routes/user');
const myArticlesRouter = require('./routes/myArticles');
const genreRouter = require('./routes/genre');
const articleRouter = require('./routes/article');
const authRoutes = require('./routes/auth');

app.use(morgan());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.use('/api/user', userRouter);
app.use('/api/myArticles', myArticlesRouter);
app.use('/api/genres', genreRouter);
app.use('/api/auth', authRoutes);
app.use('/api', articleRouter);


module.exports = app;
