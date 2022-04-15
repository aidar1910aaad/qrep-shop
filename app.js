const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const http = require("http");
const host = 'localhost';
const port = 8000;
let ejs = require('ejs');
const urlencodedParser = bodyParser.urlencoded({extended: false});


app.get('/', function (req, res) {
    res.render('index');
})

app.get('/', function(req, res) {
    res.sendFile('index');
});

app.get('/register', function (req, res) {
    res.render('register');
})

app.post('/register', urlencodedParser, function (req, res){
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('about');
})

app.listen(8080);
