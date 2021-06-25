let db = require('../database/models');
const Usuario = db.Usuario;
const op = db.Sequelize.Op;

let usersController = {

    profile: (req, res) => {
        let primaryKey = req.session.user.id;
        Usuario.findByPk(primaryKey, {
                include: [{
                        association: 'Productos'
                    },
                    {
                        association: 'Comentarios',
                    }
                ] //datos de la tabla de usuario y comentario
            })
            .then((user) => res.render('profile', {
                user
            }))
            .catch((err) => console.log(err));
    },

    profileOthers: (req, res) => {
        let primaryKey = req.params.id;
        Usuario.findByPk(primaryKey, {
                include: [{
                        association: 'Productos'
                    },
                    {
                        association: 'Comentarios',
                    }
                ] //datos de la tabla de usuario y comentario
            })
            .then((user) => res.render('profileOthers', {
                user
            }))
            .catch((err) => `Error: ${err}`)
    },

    profileEdit: (req, res) => {
        res.render('profileEdit')
    },

    //maneja el post 
    profileEditPost: (req, res) => {
        let errors = {}; //objeto literal que contiene los errores
        let primaryKey = req.session.user.id;

        //chequear los campos obligatorios
        if (req.body.email == "") {
            errors.register = "Email no puede estar vacio"
            res.locals.errors = errors
            return res.redirect('/users/profileEdit')

        } else { //guardamos el usuario en la base de datos
            let user = {
                id: req.session.user.id,
                password: req.session.user.password,
                nombre: req.body.nombre,
                Email: req.body.Email,
                Telefono: req.body.Telefono,
                FechaDeNacimiento: req.body.FechaDeNacimiento,
                imagen: `/images/users/${req.file.filename}`,
            }

            Usuario.update(user, {where:{id:primaryKey}})//creacion del usuario 
                .then(()=> res.redirect('/users/profile'))
                .catch(err => console.log(err))
            }
    },
}



module.exports = usersController;