const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const bcryptjs = require('bcryptjs');

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
        
         let passEncriptada = bcrypt.hashSync(req.body.password, 10);
      
         if(userCreado.length == 0 ){  
         DB.Usuarios.create((req,res), {
            nombre_de_usuario: req.body.usuario,
            email: req.body.email,
            password: passEncriptada,
            fecha_de_nacimiento: req.body.birth,
         } )
      
            return res.render('home');    
         } else{
            return res.render('signin');
            }
      },)
   .then(userCreado => {
      return res.redirect('/movies');
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