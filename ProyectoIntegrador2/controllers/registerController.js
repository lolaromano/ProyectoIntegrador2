const bcrypt = require ('bcryptjs');
const e = require('express');
const db = require ('../database/models');
//const bcrypt = require (bcrypt.js)
const users = db.Usuario;
const op = db.Sequelize.Op; 

let registerController = {
    
    index: (req,res) =>{
        if (req.session.user != undefined) {
            return res.redirect ('/')

        }else{
            return res.render ('register')
        }
    },

    //maneja el post 
    store: (req,res)=> {
        let errors = {}; //objeto literal que contiene los errores

        //chequear los campos obligatorios
        if (req.body.email == "") {
            errors.register = "Email no puede estar vacio"
            res.locals.errors = errors
            return res.render('register')

        } else if (req.body.password == ""){ // password no esta vacio
            errors.register = "Password no puede estar vacio"
            res.locals.errors = errors
            return res.render('register')
          
        } else if (req.body.repassword == "") {
            errors.register = "Re escribir password"
            res.locals.errors = errors
            return res.render('register')

        } else {
            users.findOne({
                where: [{email: req.body.email}]
             }) //condicion
                .then(user => {

                    if (user !=null) {
                        errors.register = "Email ya existe"
                        res.locals.errors = errors
                        return res.render('register')
                    
                    } else if (req.body.password != req.body.repassword) {
                        errors.register = "Los password no coinciden"
                        res.locals.errors = errors
                        return res.render('register')

                    } else{ //guardamos el usuario en la base de datos
                        let user = {
                            nombre: req.body.name,
                            Email: req.body.email,
                            Password: bcrypt.hashSync(req.body.password,10),
                            Telefono: req.body.telefono,
                            FechaDeNacimiento: req.body.fechadenacimiento
                        }

                        users.create(user)
                            .then( user =>{
                                return res.redirect('/login')
                            })
                            .catch (err => console.log (err))
                    }
                })
                .catch (err => console.log (err))
         
            }   
    },

}

module.exports = registerController; 