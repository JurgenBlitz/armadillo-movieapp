//var db = require("./database.js")
var express = require('express');
var router = express.Router();
var movieDBauthUrl = 'https://api.themoviedb.org/3/'

router.get('/test', function(req, res) {
  res.json({"message": 'testcall successful'});
})

module.exports = router;