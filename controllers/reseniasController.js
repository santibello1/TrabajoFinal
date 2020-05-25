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
     store: (req, res) => {
         DB.Resenias
            .create(req.body)
            .then(reseniaGuardada => {
                return res.redirect('detallePelis')
            })
            .catch(error => {
                res.send(error);
            });
     }
};


module.exports = controller;