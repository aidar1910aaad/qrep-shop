const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const urlencodedParser = bodyParser.urlencoded({
    extended: false,
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
        `имейл - ${request.body.email} имя - ${request.body.fname}`
    )
})

app.get('/', function (request, response) {
    response.send('Главная страница')
})

app.listen(3000)