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
                return res.render('noExisteUsuario')
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




};


module.exports = controller;