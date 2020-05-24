const DB = require('../database/models');
const OP = DB.Sequelize.Op;


let ubuscacor={

    vista: function(req,res){ res.render('ubuscador');},
<<<<<<< HEAD
=======

    busqueda: function(req,res){
        DB.Usuarios
        .findAll({
           where: {
              email:{ [OP.like]: '%' + req.params.email + '%'}
           },
        }  )
        
        .then(
            function(userbuscado){
           
           if(userbuscado.length == 0 ){  
              res.render('buscadorresultados', {
                userbuscado: 'No se encontraron usuarios para ese email'
            });   
                   }
             else{
              return res.render('buscadorresultados', {
                  userbuscado: userbuscado
              });
             }
           },
           )
     
         .catch(function(error){
              return res.send(error)
          })

    }
>>>>>>> master

    resultados: function (req,res){
        res.send('HOLIS ACA ESTA LA PELI')
    }
}


module.exports= ubuscacor;