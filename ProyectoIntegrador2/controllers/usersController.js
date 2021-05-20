let productos = require ("../data/productos");
let users = require ("../data/users");
let db = require ('../database/models');
const op = db.Sequelize.Op;

let usersController = {

/*   profile: (req, res) => {
       let id = req.params.id;
       return res.render ('profile', {productos: productos.lista, idSearch: id})
    }, */

   profile: (req, res) => {
        let primaryKey = req.params.id;
            profile.findbyPK (primaryKey)
            .then((productos)=> res.render('profile', {productos: productos.lista, idSearch: id}))
            console.log (productos)
            .catch((err)=> `Error: ${err}`)
    },

 /*   profileOthers: function (req, res) {
        let id = req.params.id;
        return res.render ('profileOthers', {users: users.lista, productos: productos.lista, idSearch: id })
    }, */
    
    profileOthers: (req, res) => {
        let primaryKey = req.params.id;
            profile.findbyPK (primaryKey)
            .then((users)=> res.render('profileOthers', {users: users.lista, productos: productos.lista, idSearch: id }))
            .catch((err)=> `Error: ${err}`)
    },

    register: (req, res) => {
        res.render ('register')
    },

    profileEdit: (req, res) => {
        res.render ('profileEdit')
    },

    login: (req, res) => {
        res.render ('login')
    }

}

module.exports = usersController;
