const DB = require('../database/models');
const OP = DB.Sequelize.Op;


let ubuscacor={

    vista: function(req,res){ res.render('ubuscador');},


    busqueda: function(req,res){
        DB.Usuarios
        .findAll({
           where: {
               [OP.or]: {
                    email:{ [OP.like]: '%' + req.query.buscador2 +'%'},
                    nombre_de_usuario: { [OP.like]: '%' + req.query.buscador2 +'%'}
                },  
            }
        })
        
        .then(
            
            function(userbuscado){
               
           if(userbuscado.length == 0 ){  
              res.render('buscadorresultados', {
                userbuscado: ['No se encontraron usuarios para estos datos']
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

    },


    detalles: function(req,res){

        DB.Usuarios
        .findAll({
           where: {
              email:{ [OP.like]: '%' + req.params.usuario + '%'}
           },
        
        }  )
        
        .then(
            
            function(userbuscado){
               
         res.render('userdetalles',{user:userbuscado})
           },
           )
     
         .catch(function(error){
              return res.send(error)
          })

    },
}


module.exports= ubuscacor;


