let db = require('../database/models');
const users = db.Usuario
//necesito comparar la contra con la de la base de datos (la guardamos con hash)
const bcrypt = require('bcryptjs');
const op = db.Sequelize.Op;

let loginController = {
    index: (req, res) => {
        if (req.session.user != undefined) { //verificar si hay un usuario en sesion
            return res.redirect('/') //si es != a undefined que nos mande a la pag principal
        } else {
            return res.render('login')
        }
    },

    login: (req, res) => {
        let errors = {}; //variable para guardar los errores en objeto vacio

        //buscar el usuario x medio del nombre
        users.findOne({
            where: [{nombre: req.body.name}] //coincidir con login.ejs (name)
        }) 

        //devuelve promesa
        .then (user => {
            if (user==null){
                errors.login = "Email es incorrecto"; //empezamos a llenar nuestro errors de arriba
                res.locals.error = errors;
                return res.render ('login') //lo devolvemos al login para q vuelva a escribir usuario y contra
            } else if (bcrypt.compareSync(req.body.password, user.Password)==false){//comparo contrasenia que escribo con la qu tengo en la base de datos
                if (req.body.password == user.Password) {
                    req.session.user = user; //si entro sesion correctamente 

                if (req.body.rememberme != undefined) {
                    res.cookies ('userId', user.id, {maxAge: 1000 * 60 * 10});
                }//nombre de la cookie, valor, tiempo de vigencia
                return res.redirect('/')
            }else{
                errors.login = "Contraseña incorrecta"; //comparamos lo del formulario y user.Password de la base de datos
                res.locals.error = errors;
                return res.render ('login')
            }
           
            } else{
                req.session.user = user; //si entro sesion correctamente 

                if (req.body.rememberme != undefined) {
                    res.cookies ('userId', user.id, {maxAge: 1000 * 60 * 10});
                }//nombre de la cookie, valor, tiempo de vigencia
            }
            return res.redirect('/')
        })

        .catch (error => {
            console.log(error)
        })
    },

    logout: (req, res) => {
        req.session.destroy()
        res.clearCookie('userId')
        return res.redirect('/')
    },
}

module.exports = loginController;