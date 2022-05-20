let express = require('express');
let env = require('dotenv').config()
let ejs = require('ejs');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let session = require('express-session');
const methodOverride = require('method-override')
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');


mongoose.connect('mongodb+srv://admin:admin@cluster0.2f4sk.mongodb.net/registration?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection : ' + err);
    }
});


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    cookie:{httpOnly:true}

}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/views'));

let index = require('./routes/index');
app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('File Not Found');
    err.status = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});





const UserRoute = require('./routes/index')
app.use('/user',UserRoute)

app.get('/delete', (req, res) => {
    res.render('delete');
});
app.get('/find', (req, res) => {
    res.render('find');
});







app.listen(process.env.PORT || 3000, () => {

    console.log('Server is started on http://127.0.0.1:'+3000)
})

