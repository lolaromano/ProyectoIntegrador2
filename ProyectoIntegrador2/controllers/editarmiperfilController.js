let editarmiperfil = require ('../data/productos');

let editarmiperfilController = {

    index: (req, res) =>{
        res.render('product-edit',{"product-edit": editarmiperfil});
    },
}

module.exports = editarmiperfilController ;