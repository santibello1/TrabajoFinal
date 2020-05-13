const DB = require('../database/models');

const controller={
store: (req, res)=>{
    db. //NOMBRE DEL MODELO DE LA DB DE USUARIOS (USERS)
    .create(req.body)

    .then(userCreado =>{
        return res.render('/')
    })
    .catch(function(error){
        return res.send(error)
    })
}







};
module.exports= controller