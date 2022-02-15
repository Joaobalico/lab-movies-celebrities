// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities/create', (req, res, next) => {
    Celebrity.find()
      .then((celebrities) => {
        console.log(celebrities);
        res.render('celebrities/new-celebrity');
      })
      .catch((err) => {
        next(err);
      });
});

router.post('/celebrities/create', (req, res, next) => {
    // ... your code here
    const { name, occupation, catchPhrase } = req.body;
  
    Celebrity.create({ name, occupation, catchPhrase })
      .then((celebrity) => {
        console.log('Cel created', celebrity.name);
        res.redirect('/celebrities');
      })
      .catch((err) => {
        next(err)
        res.redirect('/celebrities/create');
      });
  });

module.exports = router;