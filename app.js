const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const axios = require('axios')
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
})

app.use(express.static('public'));

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
    response.sendFile(__dirname + '/public/pages/auth.html')
})
app.get('/cart', urlencodedParser, function (
    request,
    response
) {
    response.sendFile(__dirname + '/public/pages/cart.html')
})
app.get('/wishlist', urlencodedParser, function (
    request,
    response
) {
    response.sendFile(__dirname + '/public/pages/wishlist.html')
})
app.get('/hoodies', urlencodedParser, function (
    request,
    response
) {
    response.sendFile(__dirname + '/public/pages/catalog/hoodies.html')
})
app.get('/register', urlencodedParser, function (
    request,
    response
) {
    response.sendFile(__dirname + '/public/pages/register.html')
})
app.post('/register', urlencodedParser, function (
    request,
    response
) {
    if (!request.body) return response.sendStatus(400)
    console.log(request.body)
    response.send(
        `Email - ${request.body.email} Name - ${request.body.fname} Country - ${request.body.country}`
    )
})

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/pages/index.html')
})






app.listen(3000, () => {
    console.log('http://localhost:3000/')
})

