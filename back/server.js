// imports
var express = require("express");
var app = express();
var HTTP_PORT = 8000;
var cors = require('cors');
var bodyParser = require('body-parser');
var API_KEY_v3 = 'd6b2be5b089e4559e9f0d8544e0e9dbf';

// routes
var users = require('./routes/users');
var movies = require('./routes/movies');

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/users', users)
app.use('/movies', movies)

app.use(function(req, res){
    res.status(404);
});

module.exports = app;