const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require('./moduloLogin'); //REQUERIR EL MODULO DE LOG IN PARA USARLO CUADNO LO NECESITE

const controller = {
    // muestra todas las resenias
    resenia: (req, res) => {
        DB.Resenias
            .findAll()
            .then ((resenias) => {
                res.send(resenias)
            })
            .catch(error => {
                res.send(error);
            });
    },

     //muestra el formulario para crear resenias
    create: (req, res) => {
         DB.Resenias
             .findAll()
             .then(resenias => {
                 return res.render('crearResenia');
             })
             .catch(error => {
                res.send(error);
            })
     },
     // guardar la resenia en la db. 
    store: function (req,res){
        moduloLogin.chequearUsuario(req.body)
        .then(
            function(resultado){
                // if (resultado == false){
                //     console.log('el email no esta en la base de datos');
                // }
                // else{
                //     console.log('el email esta en la base de datos');
                //     moduloLogin.buscarPorEmail(req.body.email)
                //     .then(usuario => {
                //         console.log(req.body.password);
                //     })    
                // }
                res.send(resultado)
            }
        )
        moduloLogin.buscarPorEmail(email)
        .then(
            function(resultado){

                res.send(resultado)
            }
        )
        moduloLogin.validar(email, password)
        .then(
            function(resultado){

                res.send(resultado)
            }
        )
        DB.Resenias
        .create(req.body)
      
        .then(function(info){
        

            return res.redirect('/movies/detallePelis')
        },

        )
        .catch(function(error){
            return res.send(error)
           })
    }
};


module.exports = controller;