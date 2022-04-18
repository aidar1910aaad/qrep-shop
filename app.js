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




app.listen(3000)
