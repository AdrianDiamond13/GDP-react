require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/../index.html'))
})

app.get('/login', (req,res)=>{
    res.send("LOGIN")
})



app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/