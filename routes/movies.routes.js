// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const Movie = require('../models/Movie.model')

router.get('/movies/create', (req, res, next) => {
    Movie.find()
      .then((movies) => {
        console.log(movies);
        res.render('movies/new-movie.hbs');
      })
      .catch((err) => {
        next(err);
      });
});

module.exports = router;