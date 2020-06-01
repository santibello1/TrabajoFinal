const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require('./moduloLogin'); //REQUERIR EL MODULO DE LOG IN PARA USARLO CUADNO LO NECESITE
const bcrypt = require('bcryptjs');

const controller = {
    //fijarse si existe o no el mail en la base de datos
    chequearEmail: (req, res) => {
        moduloLogin.chequearUsuario(req.body.email)
        .then (existeUsuario => {
            if (existeUsuario){
                // return res.send ('el mail existe en la db')
                return res.redirect ('/home')
            } else {
                // return res.send ('el mail NO existe en la db')
                return res.redirect ('/signin')
            }    
        })
    },

    validar: (req,res) => {
        moduloLogin.validar(req.body.email, req.body.password)
        .then (usuario => {
            let validaPass = bcrypt.compareSync(req.body.password, usuario.password);
            if(validaPass) {
                // return res.send ('el nombre de usuario y la contraseña coinciden c los datos d la db')
                return res.redirect ('/home')
            } else {
                // return res.send ('el nombre de usuario y la contraseña NO coinciden c los datos d la db')
                return res.redirect ('/signin')
            }
        })
    },

    buscarporEmail: (req, res) => {
        moduloLogin.buscarPorEmail(req.body.email)
        .then (usuarioEncontrado => {
            if(usuarioEncontrado == 0){
                return res.render ('noExisteUsuario')
            } else {
                return res.send ('datos del usuario') // se puede hacer render de buscador resultados o nada qeu ver?
            }
        })
    }

};
module.exports = controller;