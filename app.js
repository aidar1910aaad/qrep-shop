<<<<<<< HEAD
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const axios = require('axios')
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
})


app.use (
    session ({
        secret: "fff",
        resave: true,
        saveUninitialized: false,
        cookie: {}
    })

);
app.get('/usersession', function(req, res, next) {

    if (req.session.views) {

        // Increment the number of views.
        req.session.views++

        // Print the views.
        res.write('<p> No. of views: '
            + req.session.views + '</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end(' New session is started')
    }
})


app.get('/signin', urlencodedParser, function (
    request,
    response
) {
    response.sendFile(__dirname + '/pages/auth.html')
})

app.get('/register', urlencodedParser, function (
    request,
    response
) {
    response.sendFile(__dirname + '/pages/register.html')
})
app.post('/register', urlencodedParser, function (
    request,
    response
) {
    if (!request.body) return response.sendStatus(400)
    console.log(request.body)
    response.send(
        `имейл - ${request.body.email} имя - ${request.body.fname} страна - ${request.body.country}`
    )
})

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/pages/index.html')
})






app.listen(3000, () => {
    console.log('http://localhost:3000/')
=======
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
>>>>>>> dee63656a472cec5208afbbaf60c4346c379c583
})

