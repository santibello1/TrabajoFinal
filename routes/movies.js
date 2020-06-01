var express = require('express');
var router = express.Router();
const controller = require('../controllers/signinController');

router.get('/', function(req, res) {
    res.render('home');
  });

  router.get('/buscador', function(req, res) {
    res.render('buscador');
  });

  router.get('/detallePelis', function(req, res) {
    res.redirect('/resenias/detallePelis/' +req.query.id);
   });

  router.get('/generos', function(req, res) {
    res.render('generos');
  });


  router.get('/peliculasPorGen', function(req, res) {
    res.render('peliculasPorGen');
  });

  router.get('/pelisPrefes', function(req, res) {
    res.render('pelisPrefes');
  });

  
  router.get('/crearResenia', function(req, res) {
    res.render('crearResenia');
  });


  router.post('/', controller.storeUser);


module.exports = router;