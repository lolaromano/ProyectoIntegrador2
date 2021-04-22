let productos = require ('../data/productos');

let productosController = {
    products: function (req, res) {
        res.render ('products', {productos:productos})
    },

    productAdd: (req, res) => {
        res.render ('productAdd')
    },

    allProducts: (req,res) => {
        res.render ('allProducts')
    },

}

module.exports = productosController;