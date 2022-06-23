const express = require("express")
const app = express()

const path = require("path")


const port = process.env.PORT || 3123;

if(process.env.NODE_ENV === "production"){
    app.use(express.static('build'));
    app.get('*', (req, res) =>{
        req.sendFile(path.resolve(__dirname, 'build', 'static', 'index.html'));
    })
}

app.listen(port, (err) =>{
    if (err) return console.log(err);
    console.log("serv running on port:", port)
})