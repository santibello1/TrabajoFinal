var express = require('express');
var router = express.Router();
const controller = require('../controllers/signinController');

router.get('/', function(req, res) {
    res.render('signin');
  });


router.post('/storeUser', controller.storeUser);

router.get('/login', function(req, res) {
    res.render('login');
  });

  



module.exports = router;