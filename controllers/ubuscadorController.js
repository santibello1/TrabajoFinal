const DB = require('../database/models');
const OP = DB.Sequelize.Op;


let ubuscacor={

    vista: function(req,res){ res.render('ubuscador');},

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

}


module.exports= ubuscacor;