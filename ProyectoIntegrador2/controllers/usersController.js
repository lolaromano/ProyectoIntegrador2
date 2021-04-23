let productos = require ("../data/productos");
let users = require ("../data/users");

let usersController = {

    profile: (req, res) => {
        let id = req.params.id
        return res.render ('profile', {productos: productos.lista, users: users.lista, idSearch: id})
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

};

module.exports = usersController;
