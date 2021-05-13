let productos = require ('../data/productos');
const users = require('../data/users');
let db = require ('../database/models');
const op = db.Sequelize.Op;

let productosController = {

    products: function (req, res) {
        let id = req.params.id;
        return res.render ('products', {productos: productos.lista, idSearch: id, users: users.lista})
    },

    productAdd: (req, res) => {
        let id = req.params.id;
        res.render ('productAdd', {productos: productos.lista, idSearch: id, users: users.lista})
    },

    allProducts: (req,res) => {
        return res.render ('allProducts', {productos: productos.lista})
    },

}

module.exports = productosController;