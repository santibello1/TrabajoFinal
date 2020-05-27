let db = require('./database/models')

let moduloLogin = {
    chequearUsuario: function (email) {
        return db.Usuarios.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorEmail: function (email){
        return db.Usuarios.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, password) {
        return db.Usuarios.findOne({
            where:{
                email:email,
                password: password
            },
        })
        .then(results=>{
            return results;
        })
    }
}


module.exports = moduloLogin;