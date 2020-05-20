const DB = require('../database/models');
const OP = DB.Sequelize.Op;

const controller={
storeUser: (req, res)=>{

   DB.Usuarios
   .findAll({
      where: {
         email:{ [OP.like]: req.body.email}
      },
   }  )
   
   .then(
       function(userCreado){
      
      if(userCreado.length == 0 ){  //no se si va email o userCreado
         DB.Usuarios.create(req.body)
         return res.render('home');    
              }
        else{
         return res.render('login');
        }
      },
      )

    .catch(function(error){
         return res.send(error)
     })
   
  
},



//TOMAR UN EMAIL Y RETORNAR SI ESTE ESTA O NO EN LA BASE DE DATOS

emailExists: function (req, res){
   DB.Usuarios
      findOne({
         where:{
            email:{ [OP.like]: req.body.email}
         },
         and:{
            password:{ [OP.like]: req.body.password}
        },
     })
     .then(function(resultados){
        if(resultados != ""){
         res.render( 'home');
        }
        else{
           
        }
      
  })
     .catch(function(error){
          return res.send(error)
         })
},





//



};
module.exports= controller