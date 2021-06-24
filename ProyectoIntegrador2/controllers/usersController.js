let db = require('../database/models');
const Usuario = db.Usuario;
const op = db.Sequelize.Op;

let usersController = {

    profile: (req, res) => {
        let primaryKey = req.session.user.id;
        Usuario.findByPk(primaryKey, {include: [{
            association: 'Productos'
        },
        {
            association: 'Comentarios',
        }
    ] //datos de la tabla de usuario y comentario
    })
            .then((user) => res.render('profile', { user
            }))
            .catch((err) => console.log(err));
    },

    profileOthers: (req, res) => {
        let primaryKey = req.params.id;
        Usuario.findByPk(primaryKey, {include: [{
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

}

module.exports = usersController;