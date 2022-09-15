// imports
var express = require("express");
var app = express();
var HTTP_PORT = 8000;
var cors = require('cors');
var API_KEY_v3 = 'd6b2be5b089e4559e9f0d8544e0e9dbf';
var API_KEY_v4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmIyYmU1YjA4OWU0NTU5ZTlmMGQ4NTQ0ZTBlOWRiZiIsInN1YiI6IjYzMjJjZDUxZmQ0YTk2MDA3YTI4MjI4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lxIE5OC8A4af9uBNjhA2NVjFLFUu_GgIZsIZv2Rx_VQ'
//var db = require("./database.js");

// routes
var users = require('./routes/users');
var movies = require('./routes/movies');

app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.use(cors());
app.use('/users', users)
app.use('/movies', movies)

app.use(function(req, res){
    res.status(404);
});

module.exports = app;