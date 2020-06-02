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

            console.log(resultado)

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
        moduloLogin.validar(req.body.email, req.body.password)
        .then (resultado => {
            if( resultado != undefined ) {
                DB.Resenias.update({
                    texto_resenia: req.body.texto_resenia,
                    puntaje_pelicula: req.body.puntaje_pelicula,
                }, {
                    where: {
                        id: req.params.id,
                    }
                })
                .then(() => {
                    res.redirect('/misresenias/' + resultado.id)
                })
            } else {
                return res.redirect('/misresenias/editar/' + req.params.id)
            }
            
        })
    },

    deleteReview: function (req, res){
        res.render('loginEliminarResenias', { eliminarId: req.params.idn});
    },

    confirmDelete: function (req, res) {
        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado => {
            if(resultado){
                DB.Resenias.destroy({
                where: {
                    id:req.params.id,
                }
            })
            res.redirect('/misresenias/' + resultado.id);
        } else {
            res.redirect ('/misresenias/borrar' + req.params.id);
        }
        })
    }

};


module.exports = controller;