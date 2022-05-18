const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const axios = require('axios')
const User = require('./model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const path = require("path");

const urlencodedParser = bodyParser.urlencoded({

    extended: false,
})
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

mongoose.connect('mongodb+srv://admin:<password>@cluster0.2f4sk.mongodb.net/?retryWrites=true&w=majority',
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

const app = express()
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.use (
    session ({
        secret: "fff",
        resave: true,
        saveUninitialized: false,
        cookie: {}
    })

);
app.post('/api/register', async (req, res) => {
    const { username, email, sm, country, pwd: plainTextPassword } = req.body

    if (!username || typeof username !== 'string') {
        return res.json({ status: 'error', error: 'Invalid username' })
    }

    if (!plainTextPassword || typeof plainTextPassword !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' })
    }

    if (plainTextPassword.length < 8) {
        return res.json({
            status: 'error',
            error: 'Password too small. Should be at least 8 characters'
        })
    }
    if(plainTextPassword.search(/[a-z]/i)<0) {
        return res.json({
            status: 'error',
            error: 'Password should contain at least 1 letter'
        })
    }
    if(plainTextPassword.search(/[A-Z]/i)<0) {
        return res.json({
            status: 'error',
            error: 'Password should contain at least 1 capital letter'
        })
    }
    if(plainTextPassword.search(/[!\@\#\$\%\^\&\*\(\)\_\=\+\-\>\<\,\?]/) === -1) {
        return res.json({
            status: 'error',
            error: 'Password should contain at least 1 special character'
        })
    }

    const pwd = await bcrypt.hash(plainTextPassword, 10)

    try {
        const response = await User.create({
            username,
            pwd,
            email,
            sm,
            country,

        })
        console.log('User created successfully: ', response)
    } catch (error) {
        if (error.code === 11000) {
            // duplicate key
            return res.json({ status: 'error', error: 'Username already in use' })
        }
        throw error
    }

    res.json({ status: 'ok' })
})

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
    response.sendFile(__dirname + '/public/register.html')
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






app.listen(process.env.PORT || 3000, () => {
    console.log('http://localhost:3000/')
})

