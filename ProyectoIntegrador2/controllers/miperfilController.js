let miperfil = require ('../data/productos');

let miperfilController = {

    index: (req, res) =>{
        res.render('profile',{"profile": editarmiperfil});
    },
}

module.exports = miperfilController ;