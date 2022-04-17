const axios = require('axios')

let apiKey = "4e38a92605c5546ac5b1b69716f5483a";
fetch('https://api.openweathermap.org/data/2.5/weather?id=1526273&appid=4e38a92605c5546ac5b1b69716f5483a&units=metric')
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').textContent = data.name;
    })


