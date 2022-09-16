var express = require("express");
var router = express.Router();
var MDBMoviesUrl = 'https://api.themoviedb.org/3';
var API_KEY_v3 = 'd6b2be5b089e4559e9f0d8544e0e9dbf';
const axios = require('axios');

router.get('/list', function(req, res) {
  axios.get(`${MDBMoviesUrl}/movie/now_playing?api_key=${API_KEY_v3}`).then(response => {
    res.json({"data": response.data.results});
  })
  .catch(error => {
    console.log(error);
  });
});

router.get('/popular', function(req, res) {
  axios.get(`${MDBMoviesUrl}/movie/popular?api_key=${API_KEY_v3}`).then(response => {
    res.json({"data": response.data.results});
  })
  .catch(error => {
    console.log(error);
  });
});

router.get('/details/:movieId', function (req,res) {
  if (req.params.movieId) {
    axios.get(`${MDBMoviesUrl}/movie/${req.params.movieId}/credits?api_key=${API_KEY_v3}`).then(response => {
      res.json({"data": {
        "cast": response.data.cast,
        "crew": response.data.crew
      }});
    })
    .catch(error => {
      console.log(error);
    });
  }
});

module.exports = router;