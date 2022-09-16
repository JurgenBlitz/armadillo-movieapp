var express = require('express');
var router = express.Router();
var db = require('../database.js');
var md5 = require("md5")
var movieDBauthUrl = 'https://api.themoviedb.org/3/';

router.post('/login', (req, res) => {
  let query = "select * from user where email = ? and password = ?";
  let queryparams = [
    email = req.body.email,
    password = md5(req.body.password)
  ];
  db.get(query, queryparams, (error, rows) => {
    console.log('rows', rows)
    if (error || !rows ) {
      res.status(400).json({"error":error && error.message? error.message : 'User not found'});
      return;
    }
    res.json({
        "message":"success",
        "status": 200
    })
  })
});

router.post('/signup', (req,res) => {
  let data = {
    firstname: req.body.firstname,
    surname: req.body.surname,
    email: req.body.email,
    password: md5(req.body.password),
  }
  let query = 'INSERT INTO user (firstname, surname, email, password) VALUES (?,?,?,?)';
  let queryParams = [data.firstname, data.surname, data.email, data.password];
  db.run(query, queryParams, (error, result) => {
    if (error){
      res.status(400).json({"error": error.message})
      return;
  }
  res.json({
      "message": "success",
      "status": 200,
    })
  })
})

module.exports = router;