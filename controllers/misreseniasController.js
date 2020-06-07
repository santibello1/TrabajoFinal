let DB = require('../database/models')
const OP = DB.Sequelize.Op;
const moduloLogin = require('./moduloLogin');
const bcrypt = require('bcryptjs');


const controller = {

    verifyUser: function (req, res) {

        moduloLogin.chequearUsuario(req.body.email)
        .then(function(existeUsuario){
            if (existeUsuario){
                moduloLogin.buscarPorEmail(req.body.email)
                .then(usuario => {
                    let validaPass = bcrypt.compareSync(req.body.password, usuario.password);
                    if (validaPass) {
                       res.redirect('misresenias/' + usuario.id)
                    } else {
                        return res.redirect('/misresenias')
                       
                    }
                })
            } else {
                return res.send ('noExisteUsuario')
                //hay que crear una vista para esto o mandarlo a signin
        
            }
                
        })
        

    },

    getreviews: function (req, res) {
        DB.Resenias.findAll({
            where: [
                {id_usuario: req.params.id}
            ],
            include: [
               { association: 'usuario'}
            ]
        })

        .then(resultado => {

           // return res.send(resultado)

            if (resultado.length == 0) {
                res.render('misresenias', {resultado: 'todavia no hiciste reseñas'})
            }
            else {
                res.render('misresenias', {resultado: resultado})
            }
        })     
    },

    showEdit: function (req, res) {
        DB.Resenias.findOne({
            where: [
                {id: req.params.id}
            ]
        })
        .then(resultado => {
            res.render('editarResenia', { resultado });
        })
    },

    confirmEdit: function (req, res) {
      
      moduloLogin.chequearUsuario(req.body.email)
      .then(function(existeUsuario){
            if (existeUsuario){
              moduloLogin.buscarPorEmail(req.body.email)
                .then(usuario =>{
                    let validPass = bcrypt.compareSync(req.body.password, usuario.password);
                    if (validPass){
                        DB.Resenias
                        .update({
                            texto_resenia: req.body.texto_resenia,
                            puntaje_pelicula: req.body.puntaje_pelicula,
                        }, {
                            where: {
                                id: req.params.id,
                            }
                        })
                        .then(reseniaeditada =>{
                            res.redirect('/misresenias')
                        })
                    } else {
                        return res.redirect('/misresenias')
                    }
                })
            }
        })
          
    },

    deleteReview: function (req, res){
        res.render('loginEliminarResenias', { eliminarId: req.params.id});
    },

    confirmDelete: function (req, res) {
        moduloLogin.validar(req.body.email, req.body.password)
        .then(existeUsuario => {
            if(existeUsuario){
                return res.send ('existe el usuario')
                moduloLogin.buscarPorEmail(req.body.email)
                .then(usuario => {
                     let validaPass = bcrypt.compareSync(req.body.password, usuario.password);
                 if(validaPass){
                    //return res.send ('existe el usuario')
                    DB.Resenias.destroy({
                        where: {
                            id:req.params.id
                        }
                    })
                    .then(reseniadestruida =>{
                        res.redirect('/misresenias');
                    })
                }
                })
            } else {
                return res.send ('no valido el usuario')
                res.redirect ('/misresenias');
            }
        })
    },

};


module.exports = controller;