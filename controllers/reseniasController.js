const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require('./moduloLogin'); //REQUERIR EL MODULO DE LOG IN PARA USARLO CUADNO LO NECESITE
const bcrypt = require('bcryptjs');

const controller = {
    // muestra todas las resenias
    resenia: (req, res) => {
        DB.Resenias
            .findAll()
            .then ((resenia) => {
             res.render('detallePelis') //, {resenia:resenia})  
            })
            .catch(error => {
                res.send(error);
            });
    },

     //muestra el formulario para crear resenias
    create: (req, res) => {
        return res.render('crearResenia', {
            idMovie: req.query.id,
        });
    },
     // guardar la resenia en la db. 
    store: function (req,res){
        // return res.send(req.body);
        moduloLogin.chequearUsuario(req.body.email)
        .then(function(existeUsuario){
            if (existeUsuario){
                moduloLogin.buscarPorEmail(req.body.email)
                .then(usuario => {
                    let validaPass = bcrypt.compareSync(req.body.password, usuario.password);
                    if (validaPass) {
                        DB.Resenias
                            .create({
                                id_pelicula: req.body.id_pelicula,
                                id_usuario: usuario.id,
                                texto_resenia: req.body.texto_resenia,
                                puntaje_pelicula: req.body.puntaje_pelicula
                            })
                            .then(reseniaCreada => {
                                return res.redirect('/movies/detallePelis?id=' + req.body.id_pelicula);
                            })
                    } else {
                        return res.render('passworderror')
                        //hay que crear una vista para esto o mandarlo a login
                    }
                })
            } else {
                return res.render('noExisteUsuario')
                //hay que crear una vista para esto o mandarlo a login

            }
                
        })
        .catch(function(error){
            return res.send(error)
        })
    },
    // tomar las reseñas co el mismo movie id para llevarlas a detalle pelis
    enPelicula:  (req, res) => {
        DB.Resenias
        .findAll({
            where:
                { id_pelicula : req.params.id },
            include: [
                { association: 'usuario'  }
            ]
        })
        .then ( (resenias) => {
            console.log(resenias)
            return res.render('detallePelis', {resenias: resenias})
        })
    }
    
};


module.exports = controller;







