const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const bcrypt = require('bcryptjs');

const controller={
storeUser: (req, res)=>{

   DB.Usuarios
   .findOne({
      where: {
         email:{ [OP.like]: req.body.email}
      },
   } )
  .then(function(userEncontrado){
      if(!userEncontrado){ 
         //return res.send(req.body);
         
         let passEncriptada = bcrypt.hashSync(req.body.password, 10);
         //let passEncriptada = '123123';
         DB.Usuarios.create({
            nombre_de_usuario: req.body.nombre_de_usuario,
            email: req.body.email,
            password: passEncriptada,
            fecha_de_nacimiento: req.body.fecha_de_nacimiento,
         })
         .then(function (usuarioCreado) {
            //return res.send(usuarioCreado)
            return res.redirect('/movies');   
         })
         .catch(function (error) {
            return res.send({msg: 'error de DB', error});
         })   
      } else {
         return res.redirect('/signin/login');
      }
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