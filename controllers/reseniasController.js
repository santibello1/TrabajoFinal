const DB = require('../database/models');
const OP = DB.Sequelize.Op;

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
                 return res.render('crearResenia',
                 );
             })
             .catch(error => {
                res.send(error);
            })
     },
     // guardar la resenia en la db. 
     // COMO HAGO PARA HACER CON LA INFO DE LA DB DE USUARIOS CREAR ALGO EN OTRA DB
     chequearUsuario: function (email) {
        return db.Usuario.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorEmail: function (email){
        return db.Usuario.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, password) {
        return db.Usuario.findOne({
            where:{
                email:email,
                password: password
            },
        })
        .then(results=>{
            return results;
        })
    },
    store: function (req,res){
        DB.Resenias
        .findOne({
            where: {

            }
        })
        .create(req.body)
        .then(function(info){
            return res.render('/movies/detallePelis')
        },

        )
        .catch(function(error){
            return res.send(error)
           })
    }
};


module.exports = controller;