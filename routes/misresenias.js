var express = require('express');
var router = express.Router();
const controller = require('../controllers/misreseniasController');

router.get('/', function(req, res) {
    res.render('misreseniaslogin');
});

router.post('/',  controller.verifyUser); 

router.get('/editar/:id', controller.showEdit); //formulario para editar una resenia

router.post('/editar/:id', controller.confirmEdit); //procesa la edicion d una resenia

router.get('/borrar/:id', controller.deleteReview); // formulario para confirmar el delete de una resenia

router.post('/borrar/:id', controller.confirmDelete); // procesa el delete d una resenia

router.get('/:id', controller.getreviews); //listado mis resenias



module.exports = router;