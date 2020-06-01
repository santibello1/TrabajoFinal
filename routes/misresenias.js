var express = require('express');
var router = express.Router();
const controller = require('../controllers/misreseniasController');

router.get('/', function(req, res) {
    res.render('misreseniaslogin');
  });

  router.post('/',  controller.verifyUser);


  router.get('/:id', controller.getreviews);












module.exports = router;