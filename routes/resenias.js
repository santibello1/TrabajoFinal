var express = require('express');
var router = express.Router();
const controller = require('../controllers/reseniasController');

router.get('/crearResenia', controller.create);
router.post('/guardar', controller.store);


module.exports = router;