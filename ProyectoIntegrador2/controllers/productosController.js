let productos = require ('../data/productos');

let productosController = {

    products: function (req, res) {
        let id = req.params.id
        return res.render ('products', {productos: productos.lista, idSearch: id})
    },

    productAdd: (req, res) => {
        res.render ('productAdd', {productos: productos.lista})
    },

    allProducts: (req,res) => {
        return res.render ('allProducts', {productos: productos.lista})
    },

}

module.exports = productosController;