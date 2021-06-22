let db = require ('../database/models');
const users = db.Usuario
//necesito comparar la contra con la de la base de datos (la guardamos con hash)
const bcrypt = require ('bcryptjs'); 
const op = db.Sequelize.Op;


let loginController = {

    index: (req,res)=>{
        if (req.session.user != undefined) {
            return res.redirect ('/')
        }else{
            return res.render ('login')
        }
    },

    login: (req,res)=>{
        let errors = {}; //guardar los errores en objeto vacio
        //buscar el usuario x medio del mail
        users.findOne({
            where: [{nombre: req.body.name}] //coincidir con login.ejs (email)
        }) 

        //devuelve promesa
        .then (user => {
            if (user==null){
                errors.login = "Email es incorrecto";
                res.locals.error = errors;
                return res.render ('login') //lo devolvemos al login para q vuelva a escribir usuario y contra
            } else if (bcrypt.compareSync(req.body.password, user.Password)==false){
                errors.login = "Contrasenia incorrecta";
                res.locals.error = errors;
                return res.render ('login')
            } else{
                req.session.user = user;

                if (req.body.rememberme != undefined) {
                    res.cookies ('userId', user.id, {maxAge: 1000 * 60 * 10});
                }
            }
            return res.redirect('/')
        })

        .catch (error => {
            console.log(error)
        })
    },
    
    logout: (req,res)=>{
        req.session.destroy()
        res.clearCookie('userId')
        return res.redirect ('/')
    },
}

module.exports = loginController;