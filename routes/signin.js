var express = require('express');
var router = express.Router();
const controller = require('../controllers/moviesController');

router.get('/', function(req, res) {
    res.render('signin');
  });


  router.get('/login', function(req, res) {
    res.render('login');
  });

  



module.exports = router;