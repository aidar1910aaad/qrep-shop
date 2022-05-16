const express = require('express');
const bodyParser = require('body-parser');
const ejs=require('ejs')
const methodOverride = require('method-override')
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json');
const app = express();
//const port = 3000
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(methodOverride('_method'))

const UserRoute = require('./routes/UserRoute')
app.use('/user',UserRoute)

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const {router} = require("express/lib/application");

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.render('index');
});

/*app.post('/', (req, res) => {
    create(req,res)
});*/

/*app.get('/', (req, res) => {
    findAll(req, res)
});*/

app.get('/find', (req, res) => {
    res.render('find');
});
/*app.get('/findbyemail', (req, res) => {
    findOne(req,res)
});*/

app.get('/update', (req, res) => {
    res.render('update');
});

app.get('/delete', (req, res) => {
    res.render('delete');
});


let port = process.env.PORT||3000;
/*if (port == null || port == "") {
    port = 3000;
}*/

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});