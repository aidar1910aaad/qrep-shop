// берём Express
const express = require('express');
const path = require('path');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.resolve('../pages/index.html'));
});
app.get('/register', function(req, res) {
    res.sendfile(__dirname + "../pages/register.html");
});


const urlencodedParser = express.urlencoded({extended: false});

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/pages/index.html");
});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.sname} - ${request.body.email}`);
});


// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер стартовал!');