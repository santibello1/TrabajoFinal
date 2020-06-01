let DB = require('../database/models')
const OP = DB.Sequelize.Op;
const moduloLogin = require('./moduloLogin');
const bcrypt = require('bcryptjs');


const controller = {

    verifyUser: function (req, res) {

        moduloLogin.validar(req.body.email, req.body.password)
        .then(resultado => {
            if (resultado == undefined) {
                res.redirect('/misresenias')
            } else {
                console.log(resultado.id);
                res.redirect('misresenias/' + resultado.id)
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

            if (resultado == undefined) {
                res.reder('misresenias', {resultado: 'todavia no hiciste reseñas'})
            }
            else {

                res.reder('misresenias', {resultado: resultado})

            }

            

        })
        
    },




};


module.exports = controller;