var express = require('express');
var router = express.Router();
const controllerSignin = require('../controllers/signinController');
const controllerLogin = require('../controllers/loginController');


router.get('/', function(req, res) {
    res.render('signin');
  });


router.get('/login', function(req, res) {
    res.render('login');
  });





module.exports = router;