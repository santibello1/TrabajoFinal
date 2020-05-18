const DB = require('../database/models');

const controller={
storeUser: (req, res)=>{
   DB.Usuarios
    .create(req.body)
    .then(userCreado =>{
       return res.render('/')
    })
    .catch(function(error){
       return res.send(error)
   })
}

//TOMAR UN EMAIL Y RETORNAR SI ESTE ESTA O NO EN LA BASE DE DATOS

//emailExists: function (req, res)
// {
//  for (let i = 0; i < 'usuario de la db'.length; i++) {
//    if('usuario de la db' [i].email === req.params. 'email que escribio el usuario') {
//             return res.render('detalleusuario', {
//                           'email': 'usuario de la db'[i], });
//                                                   }
//                                                                                       }
//  return res.send('No se encontró el email: ' + req.params. 'email que escribio el usuario');
//  },


//



};
module.exports= controller