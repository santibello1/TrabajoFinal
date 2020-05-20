const DB = require('../database/models');

const controller={
storeUser: (req, res)=>{
   DB.Usuarios
    .create(req.body)
    .then(
          userCreado =>{
            return res.render('home');    
          })
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