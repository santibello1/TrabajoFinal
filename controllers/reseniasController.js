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