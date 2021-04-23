let productos = require ('../data/productos');

let productosController = {

    products: function (req, res) {
        res.render ('products', {productos: productos})
    },

    productAdd: (req, res) => {
        res.render ('productAdd', {productos: productos})
    },

    allProducts: (req,res) => {
        res.render ('allProducts', {productos: productos})
    },

}

module.exports = productosController;