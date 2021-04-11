let agregarProducto = require ('../data/productos');

let agregarproductoController = {

    index: (req, res) =>{
        res.render('product-add',{"product-add": agregarProducto});
    },
}

module.exports =agregarproductoController;
