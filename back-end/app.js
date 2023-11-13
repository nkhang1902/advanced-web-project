const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const HTTP_PORT = process.env.HTTP_PORT || 3000;
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/login', (req, res) => {

})

app.get('/signup', (req, res) => {

})

app.get('/logout', (req, res) => {

})

app.get('/edit-profile', (req, res) => {

});

module.exports = app;