var express = require('express');
var router = express.Router();
const controller = require('../controllers/moviesController');

router.get('/', function(req, res) {
    res.render('home');
  });

  router.get('/buscador', function(req, res) {
    res.render('buscador');
  });

  router.get('/detallePelis', function(req, res) {
    res.render('detallePelis');
  });

  router.get('/generos', function(req, res) {
    res.render('generos');
  });

  router.get('/login', function(req, res) {
    res.render('login');
  });

  router.get('/peliculasPorGen', function(req, res) {
    res.render('peliculasPorGen');
  });

  router.get('/pelisPrefes', function(req, res) {
    res.render('pelisPrefes');
  });

router.post('/store', controller.store);



module.exports = router;