var express= require ('express');
var router = express.Router();
const controller= require ('../controllers/ubuscadorController');

router.get('/', controller.vista);

<<<<<<< HEAD
router.post('/buscadorresultados', controller.resultados);

=======
router.get('/buscadorresultados', controller.busqueda)
>>>>>>> master

module.exports = router; 