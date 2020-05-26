var express= require ('express');
var router = express.Router();
const controller= require ('../controllers/ubuscadorController');

router.get('/', controller.vista);
router.get('/buscadorresultados', controller.busqueda);
router.get('/usuariodetalles/:usuario', controller.detalles )

module.exports = router; 

